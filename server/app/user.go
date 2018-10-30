package app

import (
	"github.com/gin-gonic/gin"
	"go_cms/model"
	"net/http"
	"go_cms/pkg/msg"
	"golang.org/x/crypto/bcrypt"
	"shop/pkg/log"
	"fmt"
	"go_cms/pkg/util"
)

// @Summary 用户登陆
// @Description 用户登陆并获取token
// @Accept json
// @Produce json
// @Router /api/v1/login [post]
func Login(c *gin.Context) {
	var user model.User
	if err := c.Bind(&user); err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	password, err := model.Login(user.Username)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.ERROR_USERNAME_NOT_EXISTS)
		return
	}
	err = bcrypt.CompareHashAndPassword([]byte(password), []byte(user.Password))
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.ERROR_CHECK_PASSWORD_FAIL)
		return
	}
	token, err := util.GenerateToken(user.Username, user.Password)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, token)
	return
}

// @Summary 用户注册
// @Description 用户注册
// @Accept  json
// @Produce  json
// @Router /api/v1/login [post]
func Register(c *gin.Context) {
	var user model.User
	if err := c.Bind(&user); err != nil {
		fmt.Println(err)
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if user.Username == "" || user.Password == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	password, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		log.Error(err)
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.INVALID_PARAMS)
		return
	}
	user.Password = string(password)
	if err := model.RegisterModel(&user); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.INVALID_PARAMS)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
	return
}