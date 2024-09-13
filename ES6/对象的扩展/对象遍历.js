// let obj = {
//     name: '李小龙',
//     position:'香港',
//     skill:'中国武术',
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

var obj = {
    name: '李⼩⻰',
    position: '⾹港',
    skill: '中国武术', }
   Object.defineProperty(obj, 'skill', {
    enumerable: false, })
   console.log(Object.keys(obj)) // ['name','position']