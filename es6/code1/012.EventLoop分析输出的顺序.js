import thenFs from 'then-fs';

// 非耗时任务，同步任务
console.log('A');
// 耗时任务，异步任务
thenFs.readFile('./files/1.txt', 'utf8').then(
    (r1) => {
        console.log(r1);
        console.log('B');
    }
);
// 耗时任务，异步任务
setTimeout(
    () => { console.log('C') }, 0
);
// 非耗时任务，同步任务
console.log('D');
/* 
A
D
C
111
B
 */