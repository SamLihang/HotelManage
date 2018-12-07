package model

import (
	"go_cms/pkg/log"
)

type Role struct {
	RoleId int `json:"role_id" gorm:"primary_key;AUTO_INCREMENT"`
	UserId int `json:"user_id"`
	Pid int `json:"pid"`
	RoleName string `json:"role_name"`
	Menu string `json:"menu"`
}

type RoleMenu struct{
	Id int `gorm:"primary_key;AUTO_INCREMENT"`
	RoleId int
	MenuId int
	UserId int
	Method string
}

func (RoleMenu) TableName() string {
	return "roles_menus"
}

// 检查权限
func CheckAuth(userId int) (int, []RoleMenu,error) {
	var (
		user User
		menu []RoleMenu
	)
	if err := db.Select("role_id").Where("user_id = ?", userId).First(&user).Error; err != nil {
		return 0, nil, err
	}
	db.Select("method").Where("role_id=?", user.RoleId).Find(&menu)
	return user.RoleId, menu, nil
}

func GetParentId(userId int) (int, error) {
	var user User
	var uid = userId
	if err := db.Select("parent_id").Where("user_id=?", userId).First(&user).Error; err != nil {
		return 0, err
	}
	if user.ParentId != 0 {
		uid = user.ParentId
	}
	return uid, nil
}

// 添加权限
func AddAuth(roleId, menuId, userId int) error {
	var menu Menu
	db.Select("method").Where("menu_id=?", menuId).First(&menu)
	roleMenu := RoleMenu{
		RoleId:roleId,
		MenuId:menuId,
		UserId:userId,
		Method:menu.Method,
	}
	if err := db.Create(&roleMenu).Error; err != nil {
		logging.Error(err)
		return err
	}
	return nil
}

// 删除权限
func DeleteAuth(roleId, menuId, userId int) error {
	roleMenu := RoleMenu{
		RoleId:roleId,
		MenuId:menuId,
	}
	if err := db.Where("role_id=? AND menu_id=? AND user_id=?", roleId, menuId, userId).
		Delete(&roleMenu).Error; err != nil {
		logging.Error(err)
		return err
	}
	return nil
}

// 是否有权限
func HasAuth(roleId, menuId, userId int) (bool, error) {
	var count int
	err := db.Model(&RoleMenu{}).
		Where("role_id=? AND menu_id=? AND user_id=?", roleId, menuId, userId).
		Count(&count).Error
	if err != nil {
		logging.Error(err)
		return false, err
	}
	if count > 0 {
		return true, nil
	}
	return false, nil
}

// 角色列表
func GetRole(userId, roleId int) ([]Role, error) {
	var roles []Role
	if err := db.Where("user_id=? AND pid=?", userId, roleId).Find(&roles).Error; err != nil {
		return nil, err
	}
	return roles, nil
}

// 添加角色
func AddRole(userId, roleId int, roleName string) error {
	role := Role{
		UserId:userId,
		Pid:roleId,
		RoleName:roleName,
	}
	if err := db.Create(&role).Error; err != nil {
		return err
	}
	return nil
}

// 删除角色
func DeleteRole(userId, roleId int) error {
	if err := db.Where("user_id=?", userId).Delete(&Role{RoleId:roleId}).Error; err != nil {
		return err
	}
	return nil
}

// 修改角色
func UpdateRole(userId, roleId int, roleName string) error {
	role := Role{
		RoleId:roleId,
		UserId:userId,
	}
	if err := db.Model(&role).Update("role_name", roleName).Error; err != nil {
		return err
	}
	return nil
}