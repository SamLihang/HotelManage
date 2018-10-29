# 接口文档
  * 模板
    * 获取菜单  
      参数： 模板id（如不传，返回昨天的菜单） 返回值： 
    ```javascript
      {
        模板id：Number,
        模板内容：[
          种类id: Number,
          种类名称: String,
          种类内容: [
            菜品id: Number,
            菜品名称: String,
            菜品单位: String,
            菜品数量: Number,
            备注: String,
          ]
        ]
      }
    ```
    * 新增/修改菜品
      参数：[模板id，种类id，菜名，（菜品id），菜品单位,备注] 返回值：
    ```javascript
      {
        code: 200,
        state: true,
      }
    ```
    * 删除菜品
      参数：[模板id，种类id，菜品id] 返回值：
    ```javascript
      {
        code: 200,
        state: true,
      }
    ```
    * 获取模版
      参数：[] 返回值:
    ```javascript
      [
        {
          模版id: Number,
          模版name: String,
        }
      ]
    ```
    * 保存菜单  (保存为今日菜单，统计中显示）
    参数: [菜单，时间] 返回值:
      ```javascript
        {
          code: 200,
          state: true,
        }
      ```
  * 管理
    * 新增/修改菜品  同上
    * 新增/修改模版 参数: [模版] 返回值: 
    ```javascript
      {
        code: 200,
        state: true,
      }
    ```
    * 删除模版 参数: [模版id] 返回值:
    ```javascript
      {
        code: 200,
        state: true,
      }
    ```
    * 新增/修改员工 参数: [员工名称，员工权限] 返回值:
    ```javascript
      {
        code: 200,
        state: true,
      }
    ```
    * 删除员工 参数: [员工id] 返回值:
    ```javascript
      {
        code: 200,
        state: true,
      }
    ```
  * 统计
    * 保存营业额 参数: [营业额，时间] 返回值:
    ```javascript
      {
        code: 200,
        state: true,
      }
    ```
    * 统计营业额 参数: [开始时间，结束时间] 返回值:
    ```javascript
      {
        总营业额: Number,
        总销售额: Number,
        列表：
        [
          {
            时间: Time,
            营业额: Number,
            采购额: Number,
          }
        ]
      }
    ```
    * 统计菜单 参数: [开始时间，结束时间] 返回值:
    ```javascript
      {
        总计: 
        [
          {
            菜名: String,
            数量: Number,
          }
        ]
        列表:
        [
          {
            时间: Time,
            菜单: [菜单],
          }
        ]
      }
    ```
    
