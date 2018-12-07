package model

import (
	"time"
	"go_cms/pkg/util"
	"go_cms/pkg/log"
	"fmt"
	"errors"
)

type User struct {
	UserId int `json:"user_id" gorm:"primary_key"`
	ParentId int `json:"parent_id"`
	Username string `json:"username" gorm:"type:varchar(100);unique;not null"`
	Password string `json:"password" gorm:"type:varchar(255)"`
	RoleId int `json:"role_id"`
	InviteCode string `json:"invite_code"`
	Role Role `json:"role"`
	CreatedAt time.Time
	UpdatedAt time.Time
}

type employee struct {
	UserId int `json:"user_id"`
	Username string `json:"username"`
	RoleId int `json:"role_id"`
	RoleName string `json:"role_name"`
}
// 登陆
func Login(username string) (*User, error) {
	var user User
	if err := db.Select("user_id, username, password, role_id").Where("username=?", username).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

// 注册
func Register(username, password string, inviteCode string) error {
	// 核对邀请码，并将账号关联到Boss账号
	var parentId []int
	if inviteCode != "" {
		err := db.Model(&User{}).Where("invite_code=?", inviteCode).Pluck("user_id", &parentId).Error
		if err != nil {
			return err
		}
	}
	user := new(User)
	// 新账号默认为Boss账号
	user.RoleId = 2
	if len(parentId) > 0 {
		user.RoleId = 0
		user.ParentId = parentId[0]
	}
	user.Username = username
	user.Password = password
	// 生成8为邀请码
	user.InviteCode = util.RandString(8)
	if err := db.Create(user).Error; err != nil {
		logging.Error(err)
		return err
	}
	return nil
}

// 员工列表
func GetEmployee(userId int) ([]employee, error) {
	var result []employee
	err := db.Table("users").Select("users.user_id,users.username,roles.role_name,roles.role_id").
		Joins("left join roles on users.role_id=roles.role_id").
		Where("users.parent_id=?", userId).Scan(&result).Error
	if err != nil {
		return nil, err
	}
	return result, nil
}

// 删除员工
func DeleteEmployee(userId, employeeId int) error {
	fmt.Println(employeeId)
	err := db.Model(&User{}).Where("user_id=? AND parent_id=?", employeeId, userId).
		Update(map[string]int{"parent_id":0, "role_id":2}).Error
	if err != nil {
		return err
	}
	return nil
}

// 关联Boss账号
func RelateBoss(employeeId, bossId int) error {
	if err := db.Model(&User{}).Where("user_id=?", employeeId).
		Update(map[string]int{"parent_id":bossId, "role_id":0}).Error; err != nil {
		return err
	}
	return nil
}

// 检查邀请码
func CheckInviteCode(inviteCode string) (int, error) {
	var bossId []int
	if err := db.Model(&User{}).Where("invite_code=?", inviteCode).Pluck("user_id", &bossId).Error; err != nil {
		return -1, err
	}
	if len(bossId) != 1 {
		return -1, errors.New("邀请码错误")
	}
	return bossId[0], nil
}

// 是否绑定账号
func IsRelate(employeeId int) error {
	var count int
	if err := db.Model(&User{}).Where("user_id=? AND parent_id=0", employeeId).Count(&count).Error; err != nil {
		return err
	}
	if count == 0 {
		return errors.New("已绑定boss账号，请先解除绑定")
	}
	return nil
}

// 给员工分配角色
func UserBindRole(employeeId, roleId, pid int) error {
	err := db.Model(&User{}).Where("user_id=? AND parent_id=?", employeeId, pid).
		Update("role_id", roleId).Error
	if err != nil {
		return err
	}
	return nil
}
