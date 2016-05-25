// 2016-05-25, Added by Gavin
// 阻塞代码实例
// http://www.runoob.com/nodejs/nodejs-callback.html

var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束！");

// 阻塞按是按顺序执行的，在文件读取完后才执行完程序。
