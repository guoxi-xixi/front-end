// 按需导入模块成员
import info,{ s1, s2 as str2, say } from "./03.按需导出.js";

console.log(s1);    //abc
console.log(str2);    //ccc
console.log(say);    //[Function: say]

console.log(info);  // { a: 20 }
