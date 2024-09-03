// 判断某个字符串是否包含另一个字符串片段
// const str = 'You are the best engineer.'
// console.log(str.indexOf('best'))
// console.log(str.indexOf('bst'))

// ES6 的一些新方法
// console.log(str.includes('best'))
// console.log(str.startsWith('You'))
// console.log(str.endsWith('eer.'))

// 字符串重复n次
// let str = '测试内容'
// str = str.repeat(100)
// console.log(str)


// 字符串的替换
// let str = 'xxx love you,yyy love you, zzz love you'
// 批量替换
// str = str.replaceAll('you','me')
// console.log(str)

// 模板字符串,简化字符串跟变量的拼接，换行直接
const title = '块级元素'
let divStr = `
    <div>
    <span>${title}</span>
    </div>
`


