// setTimeout 是 耗时任务，属于异步任务，宏任务
setTimeout(() => {
    console.log('1');
}, 0);

// new Promise 是 非耗时任务，属于同步任务
new Promise(
    function(resolve){  // 同步任务中的异步任务 宏任务
        console.log('2');
        resolve();
    }
).then( //Promise.then() 属于 异步任务中的微任务
    function(){
        console.log('3');
    }
)
// 非耗时任务，同步任务
console.log('4');
/* 
2
4
3
1
 */