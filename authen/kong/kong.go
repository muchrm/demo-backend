package kong

import (
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
)

type Kong struct {
	baseUrl  string
	client   *http.Client
	Customer *CustomerService
	Jwt      *JwtService
}

func New(url string) (*Kong, error) {
	if url == "" {
		return nil, errors.New("Empty url is not allowed")
	}

	k := &Kong{client: http.DefaultClient, baseUrl: url}
	k.Customer = &CustomerService{client: k}
	k.Jwt = &JwtService{client: k}
	return k, nil
}

var client = &http.Client{}

func (kong *Kong) Post(path string, body io.Reader) (*http.Request, error) {
	return http.NewRequest("POST", kong.baseUrl+path, body)
}
func (kong *Kong) Get(path string) (*http.Request, error) {
	return http.NewRequest("GET", kong.baseUrl+path, nil)
}
func (kong *Kong) Delete(path string) (*http.Request, error) {
	return http.NewRequest("DELETE", kong.baseUrl+path, nil)
}
func (kong *Kong) Put(path string, body io.Reader) (*http.Request, error) {
	return http.NewRequest("PUT", kong.baseUrl+path, body)
}
func (kong *Kong) Patch(path string, body io.Reader) (*http.Request, error) {
	return http.NewRequest("PATCH", kong.baseUrl+path, body)
}
func (k *Kong) Do(req *http.Request, value interface{}) (*http.Response, error) {
	res, err := k.client.Do(req)
	if err != nil {
		return nil, err
	}
	if res.StatusCode == 404 {
		return nil, errors.New("404 Not Found")
	}

	defer res.Body.Close()
	err = json.NewDecoder(res.Body).Decode(value)

	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	return res, nil
}
