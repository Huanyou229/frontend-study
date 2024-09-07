"use strict";
// 普通函数
function fun1() {
    console.log('这是⼀个普通函数');
}
// 箭头函数
const fun2 = () => {
    console.log('这是⼀个箭头函数');
};
const fun3 = (name) => {
    return `姓名: ${name}`;
};
const fun4 = (name, tag) => {
    return tag || '' + name;
};
fun4('你好');
fun4('你好', '世界');
// 变量指定函数类型
// 声明变量
var fun5;
// 赋值函数
fun5 = (arg1, arg2) => arg1 + arg2 || '';
// 绑定类型
var fun6 = (name, tag) => {
    return name + tag;
};
