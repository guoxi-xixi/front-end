let n1 = 10;    // 定义模块私有成员
let n2 = 20;     // 定义模块私有成员
function show(){}    // 定义模块私有方法 show

export default {    //使用export default 默认导出语法，向外共享 n1 和 show 两个成员
    n1,
    show
}

/* export default {
    n2
} */

/* node 02.默认导入.js 
file:///Users/guoxi/Desktop/%E5%89%8D%E7%AB%AF%E7%BB%83%E4%B9%A0/es6/01.%E9%BB%98%E8%AE%A4%E5%AF%BC%E5%87%BA.js:10
export default {

SyntaxError: Identifier '.default' has already been declared
    at ESMLoader.moduleStrategy (node:internal/modules/esm/translators:115:18)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:289:14) */