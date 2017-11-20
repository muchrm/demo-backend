package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func HelthCheck(w http.ResponseWriter, req *http.Request) {
	fmt.Fprint(w, "Service Healthly")
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/health", HelthCheck)
	http.Handle("/", router)
	http.ListenAndServe(":3000", handlers.LoggingHandler(os.Stdout, router))
}
