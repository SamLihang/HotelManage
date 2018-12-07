package app

import (
	"github.com/gin-gonic/gin"
	"go_cms/pkg/msg"
	"net/http"
	"go_cms/model"
	"strconv"
)

type category struct {
	CategoryId   int    `json:"category_id" form:"category_id"`
	CategoryName string `json:"category_name" form:"category_name"`
}

type vegetable struct {
	VegetableName string `json:"vegetable_name" form:"vegetable_name"`
	Unit          string `json:"unit" form:"unit"`
	CategoryId    int    `json:"category_id" form:"category_id"`
}

// 添加类别
func AddCategory(c *gin.Context) {
	var category category
	if err := c.Bind(&category); err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if category.CategoryName == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	categoryId, err := model.AddCategory(UserId, category.CategoryName);
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, categoryId)
}

// 删除类别
func DeleteCategory(c *gin.Context) {
	id := c.Param("category_id")
	if id == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	categoryId, err := strconv.Atoi(id)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	if err := model.DeleteCategory(UserId, categoryId); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 修改类别
func UpdateCategory(c *gin.Context) {
	var category category
	id := c.Param("category_id")

	if err := c.Bind(&category); err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if id == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if category.CategoryName == "" {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	categoryId, err := strconv.Atoi(id)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	if err := model.UpdateCategory(UserId, categoryId, category.CategoryName); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 类别列表
func GetCategory(c *gin.Context) {
	categories, err := model.GetCategory(UserId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, categories)
}

// 添加蔬菜
func AddVegetable(c *gin.Context) {
	var vegetable vegetable
	if err := c.Bind(&vegetable); err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.INVALID_PARAMS)
		return
	}
	if err := model.AddVegetable(vegetable.VegetableName, vegetable.Unit, vegetable.CategoryId, UserId); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 删除蔬菜
func DeleteVegetable(c *gin.Context) {
	vegetableId := c.Param("vegetable_id")
	vid, err := strconv.Atoi(vegetableId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	if err := model.DeleteVegetable(UserId, vid); err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.DisplayStatus(c, http.StatusOK, msg.SUCCESS)
}

// 蔬菜列表
func GetVegetable(c *gin.Context) {
	vegetable, err := model.GetVegetable(UserId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, vegetable)
}

func GetVegetableByCategory(c *gin.Context) {
	categoryId := c.Param("category_id")
	cid, err := strconv.Atoi(categoryId)
	if err != nil {
		msg.DisplayStatus(c, http.StatusBadRequest, msg.PARAM_MUST_INT)
		return
	}
	vegetable, err := model.GetVegetableByCategory(UserId, cid)
	if err != nil {
		msg.DisplayStatus(c, http.StatusInternalServerError, msg.ERROR)
		return
	}
	msg.Display(c, http.StatusOK, msg.SUCCESS, vegetable)
}

