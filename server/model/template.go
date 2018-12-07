package model

type template struct {
	TemplateId int `gorm:"primary_key;AUTO_INCREMENT" json:"template_id"`
	TemplateName string `json:"template_name"`
	Template string `json:"template"`
	UserId int `json:"user_id"`
}

//新建模板
func AddTemplate(userId int, templateName, templateString string) error {
	var t template
	t.UserId = userId
	t.TemplateName = templateName
	t.Template = templateString
	if err := db.Create(&t).Error; err != nil {
		return err
	}
	return nil
}

// 删除模板
func DeleteTemplate(id, userId int) error {
	var t template
	t.TemplateId = id
	t.UserId = userId
	if err := db.Delete(&t).Error; err != nil {
		return err
	}
	return nil
}

// 模板列表
func GetTemplate(userId int) ([]template, error){
	var t []template
	if err := db.Where("user_id=?", userId).Find(&t).Error; err != nil {
		return nil, err
	}
	return t, nil
}
