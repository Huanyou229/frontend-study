"use strict";
// 泛型函数，要求 T 必须具有 length 属性
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
// 使⽤泛型函数
logLength("Hello TypeScript!"); // 输出: 16
logLength([1, 2, 3]); // 输出: 3
logLength({ length: 10, value: 42 }); // 输出: 10
// logLength(42); // 错误: number 类型没有 length 属性
