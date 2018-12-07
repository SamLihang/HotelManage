package middleware

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"go_cms/pkg/util"
	"github.com/dgrijalva/jwt-go"
	"go_cms/pkg/msg"
	"strings"
	"go_cms/app"
)

func NewJwt() gin.HandlerFunc {
	return func(context *gin.Context) {
		token := context.Request.Header.Get("authorization")
		if token == "" {
			msg.DisplayStatus(context, http.StatusUnauthorized, msg.ERROR_AUTH_CHECK_TOKEN_FAIL)
			context.Abort()
			return
		}
		// bearer token验证
		bearerToken := strings.Split(token, " ")
		if len(bearerToken) != 2 || bearerToken[0] != "Bearer" {
			msg.DisplayStatus(context, http.StatusUnauthorized, msg.ERROR_INVALID_TOKEN)
			context.Abort()
			return
		}
		token = bearerToken[1]
		claims, err := util.ParseToken(token)
		if err != nil {
			switch err.(*jwt.ValidationError).Errors {
			// token过期
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
		if err := app.CheckAuth(claims.Id, context.HandlerName()); err != nil {
			msg.DisplayStatus(context, http.StatusForbidden, msg.PERMISSION_DENIED)
			context.Abort()
			return
		}
		context.Next()
	}
}