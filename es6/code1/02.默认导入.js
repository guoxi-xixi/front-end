// 从./01.默认导出.js 模块导入export default向外导入的成员，并使用m1成员接收

// m1 是合法的名称
import m1 from "./01.默认导出.js"

// 打印输出结果
console.log(m1);

/* guoxideMacBook-Pro:es6 guoxi$ node 02.默认导入.js 
{ n1: 10, show: [Function: show] } */

// 123 是非法的名称，成员名称不能以数字开头
// import 123 from "./01.默认导出.js"
// console.log(123);

/* import 123 from "./01.默认导出.js"
       ^^^

SyntaxError: Unexpected number
    at ESMLoader.moduleStrategy (node:internal/modules/esm/translators:115:18)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:289:14)
    at async link (node:internal/modules/esm/module_job:70:21) */

