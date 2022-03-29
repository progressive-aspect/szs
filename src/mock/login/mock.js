let Mock = require("mockjs")
Mock.mock("/api/login", "post", function (config) {
    console.log(config)
    let obj = JSON.parse(config.body)
    let zhanghao = obj.zhanghao
    let pass = obj.pass
    if (zhanghao == "amdin" && pass == "123456") {
        return {
            message: "恭喜你，这是一条成功消息",
            type: "success",
            data: {
                zhuangtai: "chenggong"
            }
        }
    } else {
        return {
            data: {
                zhuangtai: "shibai"
            }
        }
    }
})