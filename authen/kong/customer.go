package kong

import (
	"bytes"
	"encoding/json"
)

type Customer struct {
	ID       string `json:"id"`
	Username string `json:"username"`
}
type CustomerService struct {
	client *Kong
}

func (c *CustomerService) Get(username string) (*Customer, error) {
	req, err := c.client.Get("/consumers/" + username)
	if err != nil {
		return nil, err
	}
	customer := &Customer{}
	_, err = c.client.Do(req, customer)
	return customer, err
}

func (c *CustomerService) Add(username string, custom_id string) (*Customer, error) {
	values := map[string]string{"username": username, "custom_id": custom_id}
	jsonValue, _ := json.Marshal(values)
	req, err := c.client.Post("/consumers/", bytes.NewBuffer(jsonValue))
	req.Header.Set("Content-Type", "application/json")
	if err != nil {
		return nil, err
	}
	customer := &Customer{}
	_, err = c.client.Do(req, customer)
	return customer, err
}
