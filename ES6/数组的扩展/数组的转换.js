// from：对象转数组
// let obj = {
//     0:'a',
//     1:'b',
//     length:2,

// }
// 类数组
// let arrs = Array.from(obj)
// console.log(arrs)

// flat:数组扁平化
// let arrs = [1,2,[3,4,[5]]]
// arrs = arrs.flat(3)
// console.log(arrs)

// console.log([1,2,[3,4,[5]]].flat(1));

// sort:数组的排序
let arrs = [3,4,1,8,5]
let res = arrs.sort((e1, e2) =>{
    return e2-e1
})
console.log(res);
