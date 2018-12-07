package msg

import (
	"github.com/gin-gonic/gin"
	)

func Display(context *gin.Context, httpStatus, code int, v interface{}) {
	context.JSON(httpStatus, gin.H{
		"code": code,
		"msg": GetMsg(code),
		"data": v,
	})
}

func DisplayErr(context *gin.Context, httpStatus, code int, msg interface{}) {
	context.JSON(httpStatus, gin.H{
		"code": code,
		"msg": msg,
	})
}

func DisplayStatus(context *gin.Context, httpStatus, code int) {
	context.JSON(httpStatus, gin.H{
		"code": code,
		"msg": GetMsg(code),
	})
}