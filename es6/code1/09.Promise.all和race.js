import thenFs from 'then-fs';

// 定义一个常量数组，存放执行文件读取的异步操作
const promiseArr = [
    thenFs.readFile('./files/1.txt', 'utf8'),
    thenFs.readFile('./files/2.txt', 'utf8'),
    thenFs.readFile('./files/3.txt', 'utf8'),
]
// 等所有的异步操作全部结束后才会执行下一步的 .then 操作(等待机制)
// 将Promise的数组，作为Promise.all()的参数
Promise.all(promiseArr).then(result => {
    console.log('Promise.all result' + result);
})
// 只要任何一个异步操作完成，就立即执行下一步的 .then 操作(赛跑机制)
// 将Promise的数组，作为Promise.race()的参数
Promise.race(promiseArr).then(result => {
    console.log('Promise.race result ' + result);
})

/* guoxideMacBook-Pro:es6 guoxi$ node 09.Promise.all和race.js 
Promise.race result 222
Promise.all result111,222,333
guoxideMacBook-Pro:es6 guoxi$ node 09.Promise.all和race.js 
Promise.race result 111
Promise.all result111,222,333 */