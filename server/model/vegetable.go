package model

import (
	"time"
)

type Category struct {
	CategoryId int `json:"category_id" gorm:"primary_key;AUTO_INCREMENT"`
	UserId int `json:"user_id"`
	CategoryName string `json:"category_name"`
}

type Vegetable struct {
	VegetableId int `json:"vegetable_id" gorm:"primary_key:AUTO_INCREMENT"`
	VegetableName string `json:"vegetable_name"`
	Unit string `json:"unit"`
	CategoryId int `json:"category_id"`
	UserId int `json:"user_id"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

type CV struct {
	Vegetable
	CategoryId int `json:"category_id"`
	CategoryName string `json:"category_name"`
}

// 新增蔬菜分类
func AddCategory(userId int, categoryName string) (int, error) {
	category := Category{
		UserId:userId,
		CategoryName:categoryName,
	}
	if err := db.Create(&category).Error; err != nil {
		return -1, err 
	}
	return category.CategoryId, nil 
}

// 删除蔬菜分类
func DeleteCategory(userId, categoryId int) error {
	category := Category{
		CategoryId:categoryId,
		UserId:userId,
	}
	if err := db.Delete(&category).Error; err != nil {
		return err
	}
	return nil
}

// 修改蔬菜分类
func UpdateCategory(userId, categoryId int, categoryName string) error {
	category := Category{
		CategoryId:categoryId,
	}
	err := db.Model(&category).Where("user_id=?", userId).Update("category_name", categoryName).Error
	if err != nil {
		return err
	}
	return nil
}

// 获取蔬菜分类列表
func GetCategory(userId int) ([]Category, error) {
	var category []Category
	if err := db.Where("user_id=?", userId).Find(&category).Error; err != nil {
		return nil, err
	}
	return category, nil
}

// 添加蔬菜
func AddVegetable(vegetableName, unit string, categoryId, userId int) error {
	vegetable := Vegetable{
		Unit:unit,
		UserId:userId,
		CategoryId:categoryId,
		VegetableName:vegetableName,
	}
	if err := db.Create(&vegetable).Error; err != nil {
		return err
	}
	return nil
}

// 删除蔬菜
func DeleteVegetable(userId, vegetableId int) error {
	vegetable := Vegetable{
		VegetableId:vegetableId,
		UserId:userId,
	}
	if err := db.Delete(&vegetable).Error; err != nil {
		return err
	}
	return nil
}

// 蔬菜列表
func GetVegetable(userId int) ([]CV, error) {
	var cv []CV

	err := db.Table("vegetables").
		Select("vegetables.vegetable_id," +
			"vegetables.vegetable_name," +
			"vegetables.unit," +
			"vegetables.category_id," +
			"categories.category_name").
		Joins("left join categories on vegetables.category_id=categories.category_id").
		Where("vegetables.user_id=?", userId).Scan(&cv).Error
	if err != nil {
		return nil, err
	}
	return cv, nil
}

func GetVegetableByCategory(userId, categoryId int) ([]CV, error) {
	var cv []CV

	err := db.Table("vegetables").
		Select("vegetables.vegetable_id," +
			"vegetables.vegetable_name," +
			"vegetables.unit," +
			"categories.category_name").
		Joins("left join categories on vegetables.category_id=categories.category_id").
		Where("vegetables.user_id=? AND vegetables.category_id=?", userId, categoryId).Scan(&cv).Error
	if err != nil {
		return nil, err
	}
	return cv, nil
}

