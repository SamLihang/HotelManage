package app

import (
	"path"
	"go_cms/pkg/setting"
	"go_cms/pkg/msg"
	"go_cms/model"
	"errors"
)

var (
	UserId int
	RoleId int
)

func CheckAuth(userId int, handler string) error {
	roleId, methods, err := model.CheckAuth(userId)
	if err != nil {
		return err
	}

	UserId = userId
	RoleId = roleId
	if roleId == 2 {
		return nil
	}
	length := len(path.Join(setting.App.RootPath, setting.App.AppPath))
	for _, method := range methods {
		if method.Method == string([]rune(handler))[length+1:] {
			uid, err := model.GetParentId(userId)
			if err != nil {
				return err
			}
			UserId = uid
			return nil
		}
	}
	return errors.New(msg.GetMsg(msg.PERMISSION_DENIED))
}
