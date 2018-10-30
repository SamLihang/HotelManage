package main

import (
	"go_cms/config"
	"go_cms/pkg/log"
	"net/http"
	"go_cms/routers"
	"time"
	"go_cms/model"
)

func main() {
	config.NewSetting()
	logging.NewLog()
	model.NewDatabase()

	server := &http.Server{
		Addr:config.Server.Addr,
		Handler:routers.NewRouters(),
		ReadTimeout:config.Server.ReadTimeout * time.Second,
		WriteTimeout:config.Server.WriteTimeout * time.Second,
		MaxHeaderBytes:1 << 20,
	}
	server.ListenAndServe()
	return
}
