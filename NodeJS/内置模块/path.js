const path = require('path')
// join输出的是相对路径 ./test.js
console.log(path.join('./','test.js'))
//resolve输出的是从当前工作目录解析出的绝对路径
console.log(path.resolve('./','test.js'))