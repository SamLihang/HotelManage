package util

import (
	"github.com/dgrijalva/jwt-go"
	"time"
	"crypto/md5"
	"encoding/hex"
		"go_cms/pkg/setting"
)

var secret = []byte(setting.App.Secret)

type Claims struct {
	Id int `json:"id"`
	Username string `json:"username"`
	jwt.StandardClaims
}

func GenerateToken(id int, username string) (string, error) {
	expire := time.Now().AddDate(0, 0, 1)
	m := md5.New()
	m.Write([]byte(username))
	username = hex.EncodeToString(m.Sum(nil))
	claims := Claims{
		Id:id,
		Username:username,
		StandardClaims:jwt.StandardClaims{
			ExpiresAt:expire.Unix(),
			Issuer:"go_cms",
		},
	}
	tokenClaims := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err := tokenClaims.SignedString(secret)
	return token, err
}

func ParseToken(token string) (*Claims, error) {
	tokenClaims, err := jwt.ParseWithClaims(token, &Claims{}, func(token *jwt.Token) (interface{}, error) {
		return secret, nil
	})
	if tokenClaims != nil {
		if claims, ok := tokenClaims.Claims.(*Claims); ok && tokenClaims.Valid {
			return claims, nil
		}
	}
	return nil, err
}
