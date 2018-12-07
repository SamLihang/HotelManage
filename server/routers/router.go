package routers

import (
	"github.com/gin-gonic/gin"
	"github.com/swaggo/gin-swagger"
	"github.com/swaggo/gin-swagger/swaggerFiles"
	_ "go_cms/docs"
	"go_cms/pkg/setting"
	"go_cms/middleware"
)

var router *gin.Engine

func NewRouters() *gin.Engine {
	router = gin.New()
	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	router.Use(middleware.CorsMiddleware())
	gin.SetMode(setting.Server.Mode)
	group()
	return router
}

func group() {
	api()
}
