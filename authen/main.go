package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/muchrm/mis-backend/authen/kong"
)

type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

/*
generateConsumer(username: string, key: string, secret: string) {
    const result = await this.kong.get('/consumers/' + username);
    if (result.message === 'Not found') {
      await this.kong.post('/consumers/' + username, { username });
    }
    const jwts = await this.kong.get('/consumers/' + username + '/jwt');
    await jwts.data.forEach(async (token) => {
      await this.kong.delete('/consumers/' + username + '/jwt/' + token.id);
    });
    return await this.kong.post('/consumers/' + username + '/jwt', { key, secret });
  }
*/
func generateConsumer(username string, key string, secret string) {
	kong := kong.Kong{BaseUrl: "localhost: 3000"}
	consumer, err := kong.Get("/consumers/" + username)
	fmt.Println(consumer, err)
}
func HelloServer(w http.ResponseWriter, req *http.Request) {
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
	generateConsumer(user.Username, "mis.sci.buu.ac.th", "12343223453543")
	w.Write([]byte("hello"))
}
func HelthCheck(w http.ResponseWriter, req *http.Request) {
	fmt.Fprint(w, "Service Healthly")
}
func main() {
	router := mux.NewRouter()
	router.HandleFunc("/login", HelloServer).Methods("POST")
	router.HandleFunc("/health", HelthCheck)
	http.Handle("/", router)
	http.ListenAndServe(":3000", handlers.LoggingHandler(os.Stdout, router))
}
