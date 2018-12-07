package model

import (
	"go_cms/pkg/log"
	"time"
	"fmt"
)

type Menus struct {
	MenuId    int    `gorm:"primary_key;AUTO_INCREMENT" json:"menu_id"`
	MenuName  string `json:"menu_name"`
	Menu      string `json:"menu"`
	UserId    int    `json:"user_id"`
	CreatedAt int64  `json:"created_at"`
}

func GetMenus(userId int) (*Menus, error) {
	var menu Menus
	if err := db.Limit(1).Select("menu_id,menu_name,menu,created_at").
		Where("user_id=?", userId).
		Order("created_at desc").
		Find(&menu).Error; err != nil {
		logging.Error(err)
		return nil, err
	}
	return &menu, nil
}

//新建模板
func AddMenus(userId int, menuName, menu string) error {
	var m Menus
	timeStr := time.Now().Format("2006-01-02")
	fmt.Println("timeStr:", timeStr)
	t, _ := time.Parse("2006-01-02", timeStr)
	timeNumber := t.Unix()
	err := db.Where("user_id=? AND created_at>? AND created_at<?", userId, timeNumber-8*60*60, timeNumber+86400-8*60*60).Delete(Menus{}).Error
	if err != nil {
		logging.Error(err)
		return err
	}
	m.UserId = userId
	m.MenuName = menuName
	m.Menu = menu
	m.CreatedAt = timeNumber
	if err := db.Create(&m).Error; err != nil {
		return err
	}
	return nil
}

// 删除模板
func DeleteMenus(id, userId int) error {
	var t Menus
	t.MenuId = id
	t.UserId = userId
	if err := db.Delete(&t).Error; err != nil {
		return err
	}
	return nil
}

func (m Menus) TableName() string {
	return "menu"
}

