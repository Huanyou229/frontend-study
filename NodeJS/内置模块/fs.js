const fs = require('fs')
// 异步读取文件
// fs.readFile('E:/Projects/frontend-study/NodeJS/内置模块/test.txt'
//     ,'utf-8',
//     (err, data) => {
//         if (err) {
//             console.error('读取文件时出错:', err);
//         } else {
//             console.log('文件内容是:', data);
//         }
//     });

// 同步写入文件
// try{
//     let content = '新的文件内内容'
//     fs.writeFileSync('E:/Projects/frontend-study/NodeJS/内置模块/test.txt',content
//     )
// }catch(err){
//     console.error(err)
// }

// 检查文件状态
try {
    // 使用 fs.statSync 同步获取文件状态信息
    let status = fs.statSync('E:/Projects/frontend-study/NodeJS/内置模块/test.txt');
    
    // 检查路径是否是文件
    console.log(status.isFile());  // 输出: true 如果是文件
    
    // 检查路径是否是目录
    console.log(status.isDirectory());  // 输出: true 如果是目录
    
    // 输出文件的大小（以字节为单位）
    console.log(status.size);
} catch (err) {
    // 如果路径不存在或出现其他错误，则捕获并输出错误信息
    console.error(err);
}