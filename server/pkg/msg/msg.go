package msg

var msg = map[int]string{
	SUCCESS: "OK",
	ERROR: "Fail",
	INVALID_PARAMS: "请求参数错误",
	ERROR_AUTH_CHECK_TOKEN_TIMEOUT: "Token过期",
	ERROR_AUTH_CHECK_TOKEN_FAIL: "认证失败",
	ERROR_REGISTER_FAIL: "注册失败",
	ERROR_USERNAME_NOT_EXISTS: "用户未注册",
	ERROR_CHECK_PASSWORD_FAIL: "密码错误",
	ERROR_INVALID_TOKEN: "无效token",
	PERMISSION_DENIED: "没有权限",
	PARAM_MUST_INT: "参数必须为Int",
}

func GetMsg(code int) string {
	for k, _ := range msg {
		if k == code {
			return msg[code]
		}
	}
	return ""
}
