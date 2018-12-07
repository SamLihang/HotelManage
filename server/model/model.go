package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/go-sql-driver/mysql"
	"fmt"
	"go_cms/pkg/log"
	"go_cms/pkg/setting"
)

var (
	db *gorm.DB
	err error
)

func NewDatabase() {
	db, err = gorm.Open(
		setting.Database.Type,
		fmt.Sprintf("%s:%s@/%s?charset=%s&parseTime=True&loc=Local",
			setting.Database.User,
			setting.Database.Password,
			setting.Database.Name,
			setting.Database.Charset,
			),
		)
	if err != nil {
		logging.Fatal(err)
	}
	db.DB().SetMaxIdleConns(10)
	db.DB().SetMaxOpenConns(100)
	db.LogMode(false)
	db.DB().Ping()
}
