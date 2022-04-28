import thenFs from 'then-fs';

thenFs
    .readFile('./files/11.txt', 'utf8')  //1.返回值是一个Promise实例对象
    .catch((err) => {   // 捕获第一行发生的错误结果，并输出错误信息
        console.log(err) // 错误及时处理，不影响后续.then的执行
    })
    .then((r1) => { // 2.通过.then为第一个Promise实例指定成功之后的回调
        console.log(r1);
        return thenFs.readFile('./files/2.txt', 'utf8');    //3.在第一个.then中返回 新的Promise实例对象
    })
    .then((r2) => { //4.继续调用.then为上一个 新的promise实例对象指定成功后的回调
        console.log(r2);
        return thenFs.readFile('./files/3.txt', 'utf8');    //5.在第一个.then中返回 新的Promise实例对象
    })
    .then((r3) => { //6.继续调用.then为上一个 新的promise实例对象指定成功后的回调
        console.log(r3);
    })

/* guoxideMacBook-Pro:es6 guoxi$ node 08.基于promise异步书需读取文件内容.js 
111
222
333
guoxideMacBook-Pro:es6 guoxi$ node 08.基于promise异步书需读取文件内容.js 
111
222
333
guoxideMacBook-Pro:es6 guoxi$ node 08.基于promise异步书需读取文件内容.js 
111
222
333 */

/* 
// catch捕获异常
[Error: ENOENT: no such file or directory, open './files/11.txt'] {
    errno: -2,
    code: 'ENOENT',
    syscall: 'open',
    path: './files/11.txt'
  }
  undefined
  222
  333 */