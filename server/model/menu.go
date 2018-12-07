package model

import "go_cms/pkg/log"

type Menu struct {
	MenuId int `json:"menu_id" gorm:"primary_key"`
	Pid int `json:"pid"`
	MenuName string `json:"menu_name"`
	Method string `json:"method"`
}

func GetMenu() (*[]Menu, error) {
	var menu []Menu
	if err := db.Select("menu_id,menu_name,method").Find(&menu).Error; err != nil {
		logging.Error(err)
		return nil, err
	}
	return &menu, nil
}
