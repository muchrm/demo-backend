repo = muchrm/mis-backend/authen
commit = latest
dependency:
	go get -u github.com/golang/dep/cmd/dep
	dep ensure

build: ## Build the binary
	CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go

check: test lint vet ## Runs all tests

docker:
	docker build -f Dockerfile -t $(repo):$(commit) .

lint: ## Lint all files
	go list ./... | grep -v /vendor/ | xargs -L1 golint -set_exit_status

vet: ## Run the vet tool
	go vet $(shell go list ./... | grep -v /vendor/)

clean: ## Clean up build artifacts
	go clean

test: ## Run the  tests
	echo "" > coverage.txt
	for d in $(shell go list ./... | grep -v vendor); do \
		go test -race -coverprofile=profile.out -covermode=atomic $$d || exit 1; \
		[ -f profile.out ] && cat profile.out >> coverage.txt && rm profile.out; \
	done



help: ## Display this help message
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
