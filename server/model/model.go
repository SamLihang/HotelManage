package model

import (
	"github.com/jinzhu/gorm"
	_ "github.com/go-sql-driver/mysql"
	"go_cms/config"
	"fmt"
	"go_cms/pkg/log"
)

var (
	db *gorm.DB
	err error
)

func NewDatabase() {
	db, err = gorm.Open(
		config.Database.Type,
		fmt.Sprintf("%s:%s@/%s?charset=%s&parseTime=True&loc=Local",
			config.Database.User,
			config.Database.Password,
			config.Database.Name,
			config.Database.Charset,
			),
		)
	if err != nil {
		logging.Fatal(err)
	}
	db.DB().SetMaxIdleConns(10)
	db.DB().SetMaxOpenConns(100)
	db.DB().Ping()
}