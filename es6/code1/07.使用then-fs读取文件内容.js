import thenFs from "then-fs";

thenFs.readFile('./files/1.txt', 'utf8').then((r1) => { console.log(r1) });
thenFs.readFile('./files/2.txt', 'utf8').then((r2) => { console.log(r2) });
thenFs.readFile('./files/3.txt', 'utf8').then((r3) => { console.log(r3) });


/* guoxideMacBook-Pro:es6 guoxi$ node 07.使用then-fs读取文件内容.js 
333
111
222
guoxideMacBook-Pro:es6 guoxi$ node 07.使用then-fs读取文件内容.js 
111
222
333
guoxideMacBook-Pro:es6 guoxi$ node 07.使用then-fs读取文件内容.js 
222
333
111 */