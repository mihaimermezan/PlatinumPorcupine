package main

import (
	"awesomeProject/Database"
	"awesomeProject/Database/Repos"
	"awesomeProject/Services/AuthService/Handlers"
	"github.com/gin-gonic/gin"
	"net/http"
)

func CreateApp() *gin.Engine {
	database := Database.ConnectToDatabase()
	usersRepo := Repos.NewUserRepo(database)
	handlers := Handlers.NewAuthHandlers(usersRepo)

	app := gin.New()
	group := app.Group("/auth")
	group.GET("/healthcheck", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{
			"status": "OK",
		})
	})
	group.POST("/login", handlers.HandleLogin)
	group.POST("/account", handlers.HandleCreateAccount)

	return app
}

func main() {
	app := CreateApp()
	_ = app.Run("0.0.0.0:5080")
}
