package kong

import (
	"bytes"
	"encoding/json"
)

type JwtService struct {
	client *Kong
}
type Jwt struct {
	ID string `json:id`
}
type Jwts struct {
	Total int16 `json:total`
	Data  []Jwt `json:data`
}

func (jwt *JwtService) Get(username string) (*Jwts, error) {
	req, err := jwt.client.Get("/consumers/" + username + "/jwt")
	if err != nil {
		return nil, err
	}
	jwts := &Jwts{}
	_, err = jwt.client.Do(req, jwts)
	return jwts, err
}
func (jwt *JwtService) Delete(username string, id string) error {
	req, err := jwt.client.Delete("/consumers/" + username + "/jwt/" + id)
	if err != nil {
		return err
	}
	_, err = jwt.client.Do(req, nil)
	return err
}
func (jwt *JwtService) Add(username string, key string, secret string) error {
	values := map[string]string{"key": key, "secret": secret}
	jsonValue, _ := json.Marshal(values)
	req, err := jwt.client.Post("/consumers/"+username+"/jwt/", bytes.NewBuffer(jsonValue))
	req.Header.Set("Content-Type", "application/json")
	if err != nil {
		return err
	}
	_, err = jwt.client.Do(req, nil)
	return err
}
