package db

import (
	"encoding/json"
	"log/slog"
	"os"
	"strconv"

	"github.com/supabase-community/supabase-go"
)

type Counter struct {
	PageViews int `json:"pageViews"`
}

func GetClient() (*supabase.Client, error) {
	if err := godotenv.Load(); err != nil {
		slog.Error("Error loading .env file", "error", err)
	}
	API_URL := os.Getenv("API_URL")
	API_KEY := os.Getenv("API_KEY")

	client, err := supabase.NewClient(API_URL, API_KEY, &supabase.ClientOptions{})
	if err != nil {
		return nil, err
	}

	return client, nil
}

func GetPageViews(client *supabase.Client) int {

	var counters []Counter

	data, _, err := client.From("counters").Select("pageViews", "exact", false).Execute()
	if err != nil {
		slog.Error("Error getting page views: ", "error", err)
	}

	err = json.Unmarshal(data, &counters)
	if err != nil {
		slog.Error("Error unmarshalling data: ", "error", err)
	}

	return counters[0].PageViews
}

func IncrementPageViews(client *supabase.Client, pageViews int) {
	pageViews++
	pvstring := strconv.Itoa(pageViews)

	updateData := map[string]interface{}{"pageViews": pvstring}

	_, _, err := client.From("counters").Update(updateData, "representation", "exact").Eq("pageViews", strconv.Itoa(pageViews-1)).Execute()

	if err != nil {
		slog.Error("Error incrementing page views: ", "error", err)
	}

}
