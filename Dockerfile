#Specify the base image
FROM golang:1.23-alpine


# Creates am /app directory in the container
WORKDIR /app

COPY go.* ./

# Install GO Dependencies
RUN go mod download

#Copies everything from root directory to /app directory in the container
COPY . .


# Buils the go application
RUN go build -o main main.go


# Tells Docker which port the container listens on
EXPOSE 3003


#Specifies the executable that runs when the container starts
CMD ["./main"]