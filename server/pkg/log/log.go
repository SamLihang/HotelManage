package logging

import (
	"log"
	"os"
	"time"
	"go_cms/config"
	"path"
	"runtime"
	"fmt"
	"path/filepath"
)

type level int

const (
	DEBUG level = iota
	INFO
	WARNING
	ERROR
	FATAL
)

var (
	F *os.File
	prefix = ""
	logger *log.Logger
	flags = []string{"Debug", "Info", "Warn", "Error", "Fatal"}
)

func NewLog() {
	var err error
	fileName := time.Now().Format("20060102") + ".log"
	if _, err = os.Stat(config.App.LogPath); err != nil {
		err = os.MkdirAll(config.App.LogPath, 0666)
		if err != nil {
			log.Fatalf("Error: create log path failed. %s", err)
		}
	}
	F, err = os.OpenFile(path.Join(config.App.LogPath, fileName), os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalf("Error: open log file failed. %s", err)
	}
	logger = log.New(F, prefix, log.LstdFlags)
}

func Debug(v ...interface{}) {
	setPrefix(DEBUG)
	logger.Println(v)
}

func Info(v ...interface{}) {
	setPrefix(INFO)
	logger.Println(v)
}

func Warn(v ...interface{}) {
	setPrefix(WARNING)
	logger.Println(v)
}

func Error(v ...interface{}) {
	setPrefix(ERROR)
	logger.Println(v)
}

func Fatal(v ...interface{}) {
	setPrefix(FATAL)
	logger.Fatalln(v)
}

func setPrefix(l level) {
	_, file, line, ok := runtime.Caller(2)
	if ok {
		prefix = fmt.Sprintf("[%s][%s:%d]", flags[l], filepath.Base(file), line)
	} else {
		prefix = fmt.Sprintf("[%s]", flags[l])
	}
	logger.SetPrefix(prefix)
}