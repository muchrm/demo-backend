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
)

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func generateToken(username string, key string, secret string) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"name": username,
		"iss":  key,
		"exp":  time.Now().Add(time.Hour * 24).Unix(),
	})
	return token.SignedString([]byte(secret))
}
func generateConsumer(username string, key string, secret string) {
	kong, _ := kong.New("http://localhost:8001")
	_, err := kong.Customer.Get(username)
	if err != nil {
		_, err = kong.Customer.Add(username)
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

	go generateConsumer(user.Username, "mis.sci.buu.ac.th", "secret")
	token, _ := generateToken(user.Username, "http://mis.sci.buu.ac.th", "secret")
	if err != nil {
		http.Error(w, err.Error(), 400)
		return
	}

	fmt.Fprint(w, "token="+token)
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
