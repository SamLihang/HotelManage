package routers

import (
	"github.com/gin-gonic/gin"
	"go_cms/config"
	"github.com/swaggo/gin-swagger"
	"github.com/swaggo/gin-swagger/swaggerFiles"
	_ "go_cms/docs"
)

var router *gin.Engine

func NewRouters() *gin.Engine {
	router = gin.New()
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	gin.SetMode(config.Server.Mode)
	group()
	return router
}

func group() {
	api()
}