// 使用 ES6 模块化的语法导入 jquery
import $ from "jquery";
import "./css/index.css";
import "./css/index.less";

// 实现隔行变色效果
$(function () {
    $("li:odd").css("background", "gold"); //奇数行变色
    $("li:even").css("background", "greenyellow"); //偶数行变色
});

class Person {
    // 通过static 关键字，为 Person 类定义了一个静态属性 info
    static info = "person info";
}
// console.log(Person.info);
consle.log(Person.info);