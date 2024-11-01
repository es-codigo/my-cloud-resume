# run: build
# 	@./bin/app

# build: 
# 	@go build -o bin/app main.go

run: templ
	@go run .


templ:
	@templ generate