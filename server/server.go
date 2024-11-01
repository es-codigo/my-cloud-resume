package server

import (
	"log/slog"
	"my-cloud-resume/db"
	"my-cloud-resume/views"
	"os"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

// Creating a simple gofiber server

// type database struct {
// 	pageViews int
// }

// func (d *database) GetPageViews() int {
// 	return d.pageViews
// }

// // a function that increments pageViews
// func (d *database) IncrementPageViews() {
// 	d.pageViews++
// }

func Server() {
	db := &db.DB{
		PageViews: 0,
	}

	if err := godotenv.Load(); err != nil {
		slog.Error("Error loading .env file", "error", err)
	}

	app := fiber.New()

	// need to create a counter that increments with each view

	// app.Get("/", func(c *fiber.Ctx) error {
	// 	db.IncrementPageViews()
	// 	return Render(c, views.LandingPage(db.GetPageViews()))
	// })
	app.Get("/", func(c *fiber.Ctx) error {
		db.IncrementPageViews()
		return Render(c, views.Console(db.GetPageViews()))
	})

	app.Use(NotFoundMiddleware)

	listenAddr := os.Getenv("LISTEN_ADDR")

	app.Listen(listenAddr)
}

func NotFoundMiddleware(c *fiber.Ctx) error {
	c.Status(fiber.StatusNotFound)
	return Render(c, views.NotFound())
}

func Render(c *fiber.Ctx, component templ.Component) error {
	c.Set("Content-Type", "text/html")
	return component.Render(c.Context(), c.Response().BodyWriter())
}
