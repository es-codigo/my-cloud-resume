package db_test

import (
	"my-cloud-resume/db"
	"os"
	"reflect"
	"testing"
	// "github.com/joho/godotenv"
)

func TestGetPageViews(t *testing.T) {

	// if err := godotenv.Load(); err != nil {
	// 	slog.Error("Error loading .env file", "error", err)
	// }

	API_URL := os.Getenv("API_URL")
	API_KEY := os.Getenv("API_KEY")

	client, err := db.GetClient(API_URL, API_KEY)
	if err != nil {
		t.Errorf("Error getting client: %v", err)
	}
	pageViews := db.GetPageViews(client)

	pageViewsType := reflect.TypeOf(pageViews).Kind()
	if pageViewsType != reflect.Int {
		t.Errorf("Expected type int, got %v", pageViewsType)
	}
}

func TestIncrementPageViews(t *testing.T) {

	// if err := godotenv.Load(); err != nil {
	// 	slog.Error("Error loading .env file", "error", err)
	// }

	API_URL := os.Getenv("API_URL")
	API_KEY := os.Getenv("API_KEY")

	client, err := db.GetClient(API_URL, API_KEY)
	if err != nil {
		t.Errorf("Error getting client: %v", err)
	}
	pageViews := db.GetPageViews(client)

	db.IncrementPageViews(client, pageViews)

	newPageViews := db.GetPageViews(client)

	if newPageViews != pageViews+1 {
		t.Errorf("Expected %v, got %v", pageViews+1, newPageViews)
	}
}
