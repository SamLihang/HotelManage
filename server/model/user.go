package model

import (
		"go_cms/pkg/log"
)

type User struct {
	UserId int `json:"user_id" form:"user_id"`
	Username string `json:"username" form:"username" binding:"required"`
	Password string `json:"password" form:"password" binding:"required"`
	RoleId int `json:"role_id" form:"role_id"`
	//CreatedAt time.Time
	//UpdatedAt time.Time
	//DeletedAt *time.Time
}

func Login(username string) (string, error) {
	var user User
	if err := db.Select("password").Where(&User{Username:username}).First(&user).Error; err != nil {
		return "", err
	}
	return user.Password, nil
}

func RegisterModel(user *User) error {
	if err := db.Create(user).Error; err != nil {
		logging.Error(err.Error)
		return err
	}
	return nil
}
