package config

import (
	"log"
	"io/ioutil"
	"gopkg.in/yaml.v2"
	"time"
)

type config struct {
	Server server `yaml:"server"`
	App app `yaml:"app"`
	Database database `yaml:"database"`
}

type server struct {
	Addr string `yaml:"addr"`
	Mode string `yaml:"mode"`
	ReadTimeout time.Duration `yaml:"read_timeout"`
	WriteTimeout time.Duration `yaml:"write_timeout"`
}

type app struct {
	LogPath string `yaml:"log_path"`
	Secret string `yaml:"secret"`
}

type database struct {
	Type string `yaml:"type"`
	User string `yaml:"user"`
	Password string `yaml:"password"`
	Name string `yaml:"name"`
	Charset string `yaml:"charset"`
}

var (
	Server server
	App app
	Database database
)

func (c *config) read() (*config) {
	f, err := ioutil.ReadFile("E:/Go/src/go_cms/config/app.yaml")
	if err != nil {
		log.Fatal(err)
	}
	yaml.Unmarshal([]byte(f), c)
	return c
}

func NewSetting() {
	c := config{}
	c.read()
	Server = c.Server
	App = c.App
	Database = c.Database
}