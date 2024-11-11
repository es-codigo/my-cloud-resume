# run: build
# 	@./bin/app

# build: 
# 	@go build -o bin/app main.go

run: templ
	@air

# go: templ
# 	@go run .


templ:
	@templ generate