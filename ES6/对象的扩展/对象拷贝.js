// 浅拷贝
// let a = {name:'后端'}
// let b = a
// b.name = '前端'
// console.log(a)
// console.log(b)

// var obj = {}
// var obj2 = { b: 2 }
// var obj3 = { c: 3 }
// Object.assign(obj, obj2, obj3)
// console.log(obj) //{ b: 2, c: 3 }

// 深拷贝
let obj1 = {
    name:'电影',
    category:{
        cartoon:'动漫',
        kunfu:'武侠',
        love:'爱情',
    },
    platform:['腾讯','爱奇艺','优酷'],
}
// 对象的序列化和反序列化
let obj2 = JSON.parse(JSON.stringify(obj1))
obj2.category.kunfu = '修仙'
obj2.platform[2]='哔哩哔哩'
console.log(obj1.category.kunfu, obj1.platform[2])
console.log(obj2.category.kunfu,obj2.platform[2])

