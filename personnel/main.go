package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	mgo "gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

type Person struct {
	ID       bson.ObjectId `json:"id" bson:"_id,omitempty"`
	Position string        `json:"position"`
	Name     string        `json:"name"`
	Lastname string        `json:"lastname"`
}

func GetTeacher(w http.ResponseWriter, req *http.Request) {
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

	result := []Person{}
	err = c.Find(bson.M{}).All(&result)
	if err != nil {
		log.Fatal(err)
	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(result)
}
func HelthCheck(w http.ResponseWriter, req *http.Request) {
	fmt.Fprint(w, "Service Healthly")
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/teachers", GetTeacher).Methods("GET")
	router.HandleFunc("/health", HelthCheck)
	http.Handle("/", router)
	http.ListenAndServe(":3000", handlers.LoggingHandler(os.Stdout, router))
}
