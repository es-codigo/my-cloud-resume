package server

import (
	"log/slog"
	"my-cloud-resume/fstore"
	"my-cloud-resume/views"
	"os"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func Server() {
	if err := godotenv.Load(); err != nil {
		slog.Error("Error loading .env file", "error", err)
	}

	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		pageViews := fstore.GetPageViews()
		fstore.IncrementPageViews(pageViews)
		return Render(c, views.Console(views.Resume(pageViews)))
	})

	app.Get("/contact", func(c *fiber.Ctx) error {
		return Render(c, views.Console(views.ContactPage()))
	})

	app.Use(NotFoundMiddleware)

	listenAddr := os.Getenv("LISTEN_ADDR")

	slog.Info("HTTP server listening on", "listenAddr", listenAddr)
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
