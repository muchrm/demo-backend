package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/muchrm/mis-backend/authen/kong"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type SessionTokenResponse struct {
	Token string `json:"token"`
}
type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}
type Person struct {
	ID       bson.ObjectId `json:"id" bson:"_id,omitempty"`
	Position string        `json:"position"`
	Name     string        `json:"name"`
	Lastname string        `json:"lastname"`
}

func GetTeacherId(officerLogin string) string {
	mongoDialInfo := &mgo.DialInfo{
		Addrs:    []string{"ds113936.mlab.com:13936"},
		Database: "personnel",
		Username: "mis",
		Password: "mis2008",
		Timeout:  60 * time.Second,
	}
	session, err := mgo.DialWithInfo(mongoDialInfo)
	if err != nil {
		panic(err)
	}
	defer session.Close()

	// Optional. Switch the session to a monotonic behavior.
	session.SetMode(mgo.Monotonic, true)

	c := session.DB("personnel").C("teachers")

	result := Person{}
	err = c.Find(bson.M{"officerLogin": officerLogin}).One(&result)
	if err != nil {
		return ""
	}
	return result.ID.Hex()
}

func writeJSON(w http.ResponseWriter, status int, response interface{}) error {
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(response)
}

func generateToken(username string, key string, secret string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"name": username,
		"iss":  key,
		"exp":  time.Now().Add(time.Hour * 24).Unix(),
	})
	return token.SignedString([]byte(secret))
}

func generateConsumer(username string, id string, key string, secret string) {
	kong, _ := kong.New("http://kong:8001")
	_, err := kong.Customer.Get(username)
	if err != nil {
		_, err = kong.Customer.Add(username, id)
	}
	jwts, err := kong.Jwt.Get(username)
	if jwts.Total == 0 {
		kong.Jwt.Add(username, key, secret)
	}
}

func LoginHandler(w http.ResponseWriter, req *http.Request) {
	var user User
	if req.Body == nil {
		http.Error(w, "Please send a request body", 400)
		return
	}
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), 400)
		return
	}
	id := GetTeacherId(user.Username)
	go generateConsumer(user.Username, id, "http://mis.sci.buu.ac.th", "secret")
	token, _ := generateToken(user.Username, "http://mis.sci.buu.ac.th", "secret")
	if err != nil {
		http.Error(w, err.Error(), 400)
		return
	}
	writeJSON(w, http.StatusOK, SessionTokenResponse{Token: token})
}

func HelthCheck(w http.ResponseWriter, req *http.Request) {
	fmt.Fprint(w, "Service Healthly")
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/login", LoginHandler).Methods("POST")
	router.HandleFunc("/health", HelthCheck)
	http.Handle("/", router)
	http.ListenAndServe(":3000", handlers.LoggingHandler(os.Stdout, router))
}
