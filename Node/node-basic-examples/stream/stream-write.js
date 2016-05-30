// 2016-05-30, Added by Gavin
// Stream-流，例2
// http://www.runoob.com/nodejs/nodejs-stream.html

var fs = require("fs");
var data = '--菜鸟教程官网地址：www.runoob.com, today is 2016-05-30';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function() {
  console.log("写入完成。");
});

writeStream.on('error', function(err) {
  console.log(err.stack);
});

console.log("程序执行完毕！");
