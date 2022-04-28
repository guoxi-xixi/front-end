import fs from 'fs';

// 方法名为getFile,接收一个形参，表示要读取文件的路径
function getFile(fpath) {
    // 方法的返回值为 Promise的实例对象
    // 创建具体的异步操作，则需要在 new Promise() 构造函数期间，传递一个 function 函数，将具体的 异步操作定义到 function 函数内部。
    return new Promise(
        // resolve形参是：通过调用getFile()方法，通过.then 指定的‘成功的’回调函数
        // reject形参是：通过调用getFile()方法，通过.then 指定的‘失败的’回调函数
        function (resolve, reject) {
            fs.readFile(fpath, 'utf8', (err, dataStr) => {
                if (err) return reject(err);    //如果读取失败，调用 失败的回调函数
                resolve(dataStr);   //如果读取成功，调用 成功的回调函数
            })
        }
    )
}

getFile('./files/11.txt').then(
    (r1) => { console.log(r1) },
    (err) => { console.log(err.message) }
)

/* guoxideMacBook-Pro:es6 guoxi$ node 010.基于Promise封装异步读文件的方法.js 
111
guoxideMacBook-Pro:es6 guoxi$ node 010.基于Promise封装异步读文件的方法.js 
ENOENT: no such file or directory, open './files/11.txt' */