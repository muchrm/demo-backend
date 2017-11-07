package kong

import (
	"fmt"
	"io"
	"net/http"
)

type Kong struct {
	BaseUrl string
}

var client = &http.Client{}

func (kong *Kong) Post(path string, body io.Reader) (*http.Response, error) {
	resp, err := http.Post(kong.BaseUrl+path, "application/json; charset=utf-8", body)
	return resp, err
}
func (kong *Kong) Get(path string) (*http.Response, error) {
	resp, err := http.Get(kong.BaseUrl + path)
	return resp, err
}
func (kong *Kong) Delete(path string) (*http.Response, error) {

	req, err := http.NewRequest("GET", kong.BaseUrl+path, nil)
	if err != nil {
		return nil, err
	}
	resp, err := client.Do(req)
	return resp, err
}
func (kong *Kong) Put(path string, body io.Reader) (*http.Response, error) {
	req, err := http.NewRequest("PUT", kong.BaseUrl+path, body)
	if err != nil {
		fmt.Println(err)
		return nil, nil
	}
	resp, err := client.Do(req)
	return resp, err
}
func (kong *Kong) Patch(path string, body io.Reader) (*http.Response, error) {
	req, err := http.NewRequest("PATCH", kong.BaseUrl+path, body)
	if err != nil {
		fmt.Println(err)
		return nil, nil
	}
	resp, err := client.Do(req)
	return resp, err
}
