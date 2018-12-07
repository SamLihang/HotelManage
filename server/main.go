package main

import (
	"go_cms/routers"
	"time"
	"go_cms/pkg/setting"
	"github.com/fvbock/endless"
	"syscall"
	"log"
	"go_cms/pkg/log"
	"go_cms/model"
)

// @title Go CMS API
// @version 1.0
// @description This is a sample purchase vegetable server.
// @termsOfService http://swagger.io/terms/

// @contact.name Sam Li
// @contact.url https://github.com/SamLihang/HotelManage
// @contact.email SamLihang.com

// @license.name MIT
// @license.url https://github.com/SamLihang/HotelManage

// @host localhost:8000
// @BasePath /api/v1
func main() {
	setting.NewSetting()
	logging.NewLog()
	model.NewDatabase()
	//
	//server := &http.Server{
	//	Addr:setting.Server.Addr,
	//	Handler:routers.NewRouters(),
	//	ReadTimeout:setting.Server.ReadTimeout * time.Second,
	//	WriteTimeout:setting.Server.WriteTimeout * time.Second,
	//	MaxHeaderBytes:1 << 20,
	//}
	//server.ListenAndServe()


	endless.DefaultReadTimeOut = setting.Server.ReadTimeout * time.Second
	endless.DefaultWriteTimeOut = setting.Server.WriteTimeout * time.Second
	endless.DefaultMaxHeaderBytes = 1 << 20

	server := endless.NewServer(setting.Server.Addr, routers.NewRouters())
	server.BeforeBegin = func(add string) {
		log.Printf("Actual pid is %d", syscall.Getpid())
	}

	err := server.ListenAndServe()
	if err != nil {
		log.Printf("Server err: %v", err)
	}
	return
}

