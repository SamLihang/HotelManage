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
    * 新增菜品
      参数：[模板id，种类id，菜名，菜品单位,备注] 返回值：
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
