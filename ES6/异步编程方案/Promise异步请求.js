// const promise = new Promise((resolve, reject) => {
//   Request({
//     url: "https://www.baidu.com",
//     onSuccess(data) {
//       resolve(data);
//     },
//     onError(err) {
//       reject(err);
//     },
//   });
// });

// // 使⽤ Promise
// Promise.then((data) => {
//   console.log(data);
// })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("完成");
//   });

// 创建一个 Promise 对象，用于封装异步操作
const promise = new Promise((resolve, reject) => {
    // 使用 fetch API 发起 HTTP 请求
    fetch("https://www.baidu.com")
      .then((response) => {
        // 当请求成功时，检查响应是否成功（状态码在 200-299 之间）
        if (response.ok) {
          // 成功的响应需要以文本形式解析
          return response.text(); 
        } else {
          // 如果状态码不是 200-299，抛出错误，进入 catch 块
          reject(`请求失败，状态码：${response.status}`);
        }
      })
      .then((data) => {
        // 成功解析响应文本后，调用 resolve 将结果传递出去
        resolve(data);
      })
      .catch((err) => {
        // 捕获所有网络错误或解析错误，调用 reject 传递错误信息
        reject(`请求错误：${err}`);
      });
  });
  
  // 使用创建的 promise 处理异步请求的结果
  promise
    .then((data) => {
      // 当 Promise 被 resolve 时，执行此回调，输出请求返回的内容
      console.log("请求成功，返回数据：", data);
    })
    .catch((err) => {
      // 当 Promise 被 reject 时，执行此回调，输出错误信息
      console.log("请求失败，错误信息：", err);
    })
    .finally(() => {
      // 无论请求成功或失败，最后都会执行此回调，表示请求结束
      console.log("请求已完成");
    });
  