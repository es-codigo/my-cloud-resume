package fstore

import (
	"context"
	"log/slog"

	"cloud.google.com/go/firestore"
)

var collectionName = "counters/rcV7THE9u5Sb1azqZBQo"

func GetPageViews() int64 {

	ctx := context.Background()
	client, err := firestore.NewClient(ctx, "my-cloud-resume-440223")
	if err != nil {
		slog.Error("Error initializing Firestore client", "error", err)
	}
	defer client.Close()

	PageViews := client.Doc(collectionName)

	docsnap, err := PageViews.Get(ctx)
	if err != nil {
		slog.Error("Error getting pageViews document", "error", err)
	}

	dataMap := docsnap.Data()

	views := dataMap["pageViews"].(int64)

	return views

}

func IncrementPageViews(pv int64) {
	pv++

	ctx := context.Background()
	client, err := firestore.NewClient(ctx, "my-cloud-resume-440223")
	if err != nil {
		slog.Error("Error initializing Firestore client", "error", err)
	}
	defer client.Close()
	PageViews := client.Doc(collectionName)

	_, err = PageViews.Update(ctx, []firestore.Update{{Path: "pageViews", Value: pv}})
	if err != nil {
		slog.Error("Error updating pageViews document", "error", err)
	}

}
