package app

import (
	"github.com/gin-gonic/gin"
	"go_cms/pkg/msg"
	"net/http"
	"go_cms/model"
	"strconv"
)

type menu struct {
	MenuName string `json:"menu_name" form:"menu_name"`
	Menu string `json:"menu" form:"menu"`
}

// 新建菜单
func AddMenu(c *gin.Context) {
	var m menu
	if err := c.Bind(&m); err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if err := model.AddMenus(UserId, m.MenuName, m.Menu); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 删除菜单
func DeleteMenu(c *gin.Context) {
	id := c.Param("id")
	menu_id, err := strconv.Atoi(id)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	if id == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	err = model.DeleteMenus(menu_id, UserId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 菜单列表
func GetMenus(c *gin.Context) {

	menus, err := model.GetMenus(UserId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, menus)
}

