/**
 * Created by Gavin on 16/1/27.
 * http://www.runoob.com/try/try.php?filename=tryjs_function_counter
 */

// 全局变量可应用于页面上的所有脚本。
// 变量声明是如果不使用 var 关键字，那么它就是一个全局变量，即便它在函数内定义。
var counter = 0;

function add() {
    return counter += 1;
}

function myCounter() {
    document.getElementById("demo1").innerHTML = add();
}


// 闭包
// 闭包是指拥有自由独立的变量的函数。
// 闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。
// 环境由闭包创建时在作用域中的任何局部变量组成。
// 闭包是可访问上一层函数作用域里变量的函数，即便上一层函数已经关闭。
var addNew = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

function myFunction() {
    document.getElementById("demo2").innerHTML = addNew();
}

// http://www.php100.com/html/it/focus/2014/1113/7796.html
// 优点:在javascript中没有块级作用域，一般为了给某个函数申明一些只有该函数才能使用的局部变量时，我们就会用到闭包，这样我们可以很大程度上减少全局作用域中的变量，净化全局作用域。
// 缺点:当然这样的好处是需要付出代价的，代价就是内存的占用。