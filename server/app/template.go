package app

import (
	"github.com/gin-gonic/gin"
	"go_cms/pkg/msg"
	"net/http"
	"go_cms/model"
	"fmt"
	"strconv"
)

type template struct {
	TemplateName string `json:"template_name" form:"template_name"`
	Template string `json:"template" form:"template"`
}

// 新建模板
func AddTemplate(c *gin.Context) {
	var t template
	if err := c.Bind(&t); err != nil {
		fmt.Println(err)
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if err := model.AddTemplate(UserId, t.TemplateName, t.Template); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 删除模板
func DeleteTemplate(c *gin.Context) {
	id := c.Param("id")
	templateId, err := strconv.Atoi(id)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	if id == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	err = model.DeleteTemplate(templateId, UserId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 模板列表
func GetTemplate(c *gin.Context) {
	template, err := model.GetTemplate(UserId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, template)
}
