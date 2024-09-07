"use strict";
// 定义⼀个泛型类
class GenericNumber {
    constructor(zeroValue, addFn) {
        this.zeroValue = zeroValue;
        this.add = addFn;
    }
}
// 使⽤泛型类
let myGenericNumber = new GenericNumber(0, (x, y) => x + y);
console.log(myGenericNumber.add(5, 10)); // 输出: 15
let myGenericString = new GenericNumber("", (x, y) => x + y);
console.log(myGenericString.add("Hello, ", "World!")); // 输出: Hello, World!
