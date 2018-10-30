package routers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"go_cms/app"
	"go_cms/middleware"
)

func api() {
	r := router.Group("api/v1")
	r.POST("/login", app.Login)
	r.POST("/register", app.Register)

	r.Use(middleware.NewJwt())
	{
		r.GET("test", func(context *gin.Context) {
			context.JSON(http.StatusOK, gin.H{
				"code": 0,
				"message": "test",
			})
		})
	}
}
