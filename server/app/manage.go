package app

import (
	"go_cms/model"
	"github.com/gin-gonic/gin"
	"go_cms/pkg/msg"
	"net/http"
	"strconv"
)

// 菜单列表
func GetMenu(c *gin.Context) {
	menu, err := model.GetMenu()
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, menu)
}

// 添加权限
func AddAuth(c *gin.Context) {
	var (
		err error
		role int
		menu int
	)
	roleId := c.Param("role_id")
	menuId := c.Param("menu_id")
	role, err = strconv.Atoi(roleId)
	menu, err = strconv.Atoi(menuId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	hasAuth, _ := model.HasAuth(role, menu, UserId)
	if hasAuth {
		msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
		return
	}
	if err := model.AddAuth(role, menu, UserId); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
	return
}

// 删除权限
func DeleteAuth(c *gin.Context) {
	var (
		err error
		role int
		menu int
	)
	roleId := c.Param("role_id")
	menuId := c.Param("menu_id")
	role, err = strconv.Atoi(roleId)
	menu, err = strconv.Atoi(menuId)
	if err = model.DeleteAuth(role, menu, UserId); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
	return
}

// 角色列表
func GetRole(c *gin.Context) {
	roles, err := model.GetRole(UserId, RoleId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, roles)
}

// 添加角色
func AddRole(c *gin.Context) {
	roleName := c.PostForm("role_name")
	if roleName == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if err := model.AddRole(UserId, RoleId, roleName); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 删除角色
func DeleteRole(c *gin.Context) {
	id := c.Param("role_id")
	roleId, err := strconv.Atoi(id)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	if err := model.DeleteRole(UserId, roleId); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 修改角色
func UpdateRole(c *gin.Context) {
	roleName := c.PostForm("role_name")
	id := c.Param("role_id")
	roleId, err := strconv.Atoi(id)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	if roleName == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if err := model.UpdateRole(UserId, roleId, roleName); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 给员工分配角色
func UserBindRole(c *gin.Context) {
	var (
		err error
		eid int
		rid int
	)
	employeeId := c.Param("employee_id")
	roleId := c.Param("role_id")
	eid, err = strconv.Atoi(employeeId)
	rid, err = strconv.Atoi(roleId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	if err := model.UserBindRole(eid, rid, UserId); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}


