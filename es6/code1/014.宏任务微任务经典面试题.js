console.log('1');   // 同步任务
setTimeout(() => {  // 异步任务
    console.log("2");   //宏任务
    new Promise(
        function (resolve) {
            console.log("3");   // 宏任务
            resolve();
        }
    ).then( //微任务
        () => { console.log("4"); }
    )
}, 0);

new Promise(    //  同步任务
    function (resolve) {
        console.log("5");
        resolve();
    }
).then( // 微任务
    () => { console.log("6"); }
)

setTimeout(() => {  // 异步任务
    console.log("7");
    new Promise(
        function (resolve) {
            console.log("8");   // 宏任务
            resolve();
        }
    ).then( // 微任务
        () => { console.log("9") }
    )
}, 0);
/* 

1
5
6
2
3
4
7
8
9
 */