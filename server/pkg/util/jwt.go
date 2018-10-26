package util

import (
	"github.com/dgrijalva/jwt-go"
	"time"
	"crypto/md5"
	"encoding/hex"
	"go_cms/config"
)

var secret = []byte(config.App.Secret)

type Claims struct {
	Username string `json:"username"`
	Password string `json:"password"`
	jwt.StandardClaims
}

func GenerateToken(username, password string) (string, error) {
	expire := time.Now().Add(3 * time.Hour)
	m := md5.New()
	m.Write([]byte(username))
	username = hex.EncodeToString(m.Sum(nil))
	m.Write([]byte(password))
	password = hex.EncodeToString(m.Sum(nil))
	claims := Claims{
		Username:username,
		Password:password,
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
