// var promise1,
//   promise2 = new Promise();
// Promise.all({
//   promise1,
//   promise2,
// }).then(([res1, res2]) => {
//   console.log(res1, res2);
// });
// Promise.race({
//   promise1,
//   promise2,
// }).then((res) => {
//   console.log(res);
// });

// 假设有两个函数，它们都返回Promise对象，并分别进行不同的异步操作
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // 模拟一个异步请求，例如获取用户数据
        setTimeout(() => {
            resolve({ id: userId, name: '用户' + userId });
        }, 1000);
    });
}

function fetchProductData(productId) {
    return new Promise((resolve, reject) => {
        // 模拟一个异步请求，例如获取产品数据
        setTimeout(() => {
            resolve({ id: productId, name: '产品' + productId });
        }, 1000);
    });
}

// 使用Promise.all等待两个promise对象都解决后再执行
Promise.all([fetchUserData(1), fetchProductData(2)]).then(([user, product]) => {
    console.log('用户数据和产品数据都获取成功:', user, product);
}).catch(error => {
    console.error('并行请求出现错误:', error);
});

// 使用Promise.race获取第一个解决的promise的结果
Promise.race([fetchUserData(1), fetchProductData(2)]).then(result => {
    console.log('第一个解决的请求结果:', result);
}).catch(error => {
    console.error('并行请求出现错误:', error);
});