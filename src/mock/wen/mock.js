let Mock = require("mockjs")
let tableData = [{
    id:0,
    date: '路飞决战光明顶',
    name: '王小虎',
    liulan: '123',
    huifu: "213"
}, {
    id:1,
    date: '路飞决战光明顶',
    name: '王小虎',
    liulan: '123',
    huifu: "213"
}, {
    id:2,
    date: '路飞决战光明顶',
    name: '王小虎',
    liulan: '123',
    huifu: "213"
}, {
    id:3,
    date: '路飞决战光明顶',
    name: '王小虎',
    liulan: '123',
    huifu: "213"
}]
Mock.mock("/api/wen", "get", tableData)
Mock.mock("/api/wen", "delete", function(){
    return "删除成功"
})