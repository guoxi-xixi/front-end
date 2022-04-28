import thenFs from 'then-fs';

// async/await 是 ES8(ECMAScript 2017)引入的新语法，用来简化 Promise 异步操作。
// 如果在 function 中使用了 await，则 function 必须被 async 修饰

// 在 async 方法中，第一个 await 之前的代码会同步执行，await 之后的代码会异步执行
console.log('A');
async function getAllFile() {
    console.log('B');
    // 按照顺序读取r1 r2 r3
    const r1 = await thenFs.readFile('./files/1.txt', 'utf8');
    console.log(r1);
    const r2 = await thenFs.readFile('./files/2.txt', 'utf8');
    console.log(r2);
    const r3 = await thenFs.readFile('./files/3.txt', 'utf8');
    console.log(r3);
    console.log('D');
}


getAllFile()    //未使用async/awit打印结果 Promise { _40: 0, _65: 0, _55: null, _72: null }
// 使用async/await打印读取结果
console.log('C');

/* A
B
C
111
222
333
D */