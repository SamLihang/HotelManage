package middleware

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"go_cms/pkg/util"
	"github.com/dgrijalva/jwt-go"
	"go_cms/pkg/msg"
)

func NewJwt() gin.HandlerFunc {
	return func(context *gin.Context) {
		token := context.Request.Header.Get("Authorization")
		if token == "" {
			msg.DisplayStatus(context, http.StatusBadRequest, msg.INVALID_PARAMS)
			context.Abort()
			return
		} else {
			_, err := util.ParseToken(token)
			if err != nil {
				switch err.(*jwt.ValidationError).Errors {
				case jwt.ValidationErrorExpired:
					msg.DisplayStatus(context, http.StatusUnauthorized, msg.ERROR_AUTH_CHECK_TOKEN_TIMEOUT)
					context.Abort()
					return
				default:
					msg.DisplayStatus(context, http.StatusUnauthorized, msg.ERROR_AUTH_CHECK_TOKEN_FAIL)
					context.Abort()
					return
				}
			}
		}
		context.Next()
	}
}