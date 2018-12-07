package routers

import (
			"go_cms/app"
	"go_cms/middleware"
)

func api() {
	r := router.Group("api/v1")
	r.GET("/user/login", app.Login)
	r.POST("/user/register", app.Register)

	r.Use(middleware.NewJwt())
	{
		// 菜单
		r.GET("menu", app.GetMenu)
		// 权限
		r.POST("user/auth/:role_id/:menu_id", app.AddAuth)
		r.DELETE("user/auth/:role_id/:menu_id", app.DeleteAuth)
		// 角色
		r.GET("role", app.GetRole)
		r.POST("role", app.AddRole)
		r.DELETE("role/:role_id", app.DeleteRole)
		r.PUT("role/:role_id", app.UpdateRole)
		// 员工
		r.GET("employee", app.GetEmployee)
		r.POST("employee", app.RelateBoss)
		r.DELETE("employee/:employee_id", app.DeleteEmployee)
		r.PUT("employee/:employee_id/:role_id", app.UserBindRole)
		// 蔬菜分类
		r.GET("category", app.GetCategory)
		r.POST("category", app.AddCategory)
		r.PUT("category/:category_id", app.UpdateCategory)
		r.DELETE("category/:category_id", app.DeleteCategory)
		// 蔬菜
		r.POST("vegetable", app.AddVegetable)
		r.DELETE("vegetable/:vegetable_id", app.DeleteVegetable)
		r.GET("vegetable", app.GetVegetable)
		r.GET("vegetable/:category_id", app.GetVegetableByCategory)
		// 模板
		r.POST("template", app.AddTemplate)
		r.DELETE("template/:id", app.DeleteTemplate)
		r.GET("template", app.GetTemplate)
		// 菜单
		r.GET("menus", app.GetMenus)
		r.POST("menus", app.AddMenu)
		r.DELETE("menus/:id", app.DeleteMenu)
	}
}

