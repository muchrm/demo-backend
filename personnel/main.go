package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	mgo "gopkg.in/mgo.v2"
)

type Person struct {
	ID       string `json:"id"`
	Position string `json:"position"`
	Name     string `json:"name"`
	Lastname string `json:"lastname"`
}

func GetTeacher(w http.ResponseWriter, req *http.Request) {
	session, err := mgo.Dial("server1.example.com,server2.example.com")
	if err != nil {
		panic(err)
	}
	defer session.Close()

	// Optional. Switch the session to a monotonic behavior.
	session.SetMode(mgo.Monotonic, true)

	c := session.DB("personel").C("people")

	result := Person{}
	err = c.Find(nil).All(&result)
	if err != nil {
		log.Fatal(err)
	}
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
