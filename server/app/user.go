package app

import (
	"github.com/gin-gonic/gin"
	"go_cms/model"
	"net/http"
	"go_cms/pkg/msg"
	"golang.org/x/crypto/bcrypt"
	"go_cms/pkg/util"
	"go_cms/pkg/log"
	"strconv"
)

type user struct {
	Username string `json:"username" form:"username"`
	Password string `json:"password" form:"password"`
	InviteCode string `json:"invite_code" form:"invite_code"`
}

//type userAuth struct {
//	MenuId int `json:"menu_id" form:"menu_id"`
//	Method string `json:"method" form:"method"`
//	Delete int `json:"delete"`
//}

// @Summary 用户登陆
// @Accept json
// @Tags User
// @Produce  json
// @Param username query string true "username" 用户名
// @Param password query string true "password" 用户密码
// @Router /user/login [post]
// @Success 200 {string} json "{"code":0,"message":"OK","data":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwMmNiOTYyYWM1OTA3NWI5NjRiMDcxNTJkMjM0YjcwIiwicGFzc3dvcmQiOiI0NmY5NGM4ZGUxNGZiMzY2ODA4NTA3NjhmZjFiN2YyYSIsImV4cCI6MTU0MDYxMTU4MCwiaXNzIjoiZ29fY21zIn0.gzaHUStSEY8cnlfS1Gu_GScnNGDs6x1HZTpLgVT5aIw"}"
func Login(c *gin.Context) {
	var u user
	if err := c.Bind(&u); err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	userInfo, err := model.Login(u.Username)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.ERROR_USERNAME_NOT_EXISTS)
		return
	}
	err = bcrypt.CompareHashAndPassword([]byte(userInfo.Password), []byte(u.Password))
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.ERROR_CHECK_PASSWORD_FAIL)
		return
	}
	token, err := util.GenerateToken(userInfo.UserId, u.Username)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, token)
	return
}

// @Summary 用户注册
// @Accept json
// @Tags User
// @Produce  json
// @Param username body model.User true "username"
// @Param password body model.User true "password"
// @Router /user/register [post]
// @Success 200 {string} json "{"code":0,"msg":"OK"}"
func Register(c *gin.Context) {
	var u user
	if err := c.Bind(&u); err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if u.Username == "" || u.Password == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if _, err := model.CheckInviteCode(u.InviteCode); err != nil {
		msg.DisplayErr(c, http.StatusBadRequest, msg.INVALID_PARAMS, err.Error())
		return
	}
	password, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		logging.Error(err)
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.INVALID_PARAMS)
		return
	}
	u.Password = string(password)
	if err := model.Register(u.Username, u.Password, u.InviteCode); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
	return
}

// 员工列表
func GetEmployee(c *gin.Context) {
	employees, err := model.GetEmployee(UserId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	for key, employee := range employees {
		if employee.UserId == UserId {
			employees = append(employees[:key], employees[key+1:]...)
			break
		}
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, employees)
}

// 删除员工
func DeleteEmployee(c *gin.Context) {
	employeeId := c.Param("employee_id")
	eid, err := strconv.Atoi(employeeId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	if err := model.DeleteEmployee(UserId, eid); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
	return
}

// 关联boss账号
func RelateBoss(c *gin.Context) {
	var (
		err error
		bossId int
	)
	inviteCode := c.PostForm("invite_code")
	if err = model.IsRelate(UserId); err != nil {
		msg.DisplayErr(c, http.StatusBadRequest, msg.INVALID_PARAMS, err.Error())
		return
	}
	if bossId, err = model.CheckInviteCode(inviteCode); err != nil {
		msg.DisplayErr(c, http.StatusBadRequest, msg.INVALID_PARAMS, err.Error())
		return
	}
	if err = model.RelateBoss(UserId, bossId); err != nil {
		msg.DisplayErr(c, http.StatusBadRequest, msg.INVALID_PARAMS, err.Error())
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
	return
}