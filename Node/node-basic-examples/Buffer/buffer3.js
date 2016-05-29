// 2016-05-29, Added by Gavin
// Buffer-缓冲区，例3
// http://www.runoob.com/nodejs/nodejs-buffer.html

// 缓冲区合并
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("buffer3 内容：" + buffer3.toString());

// 缓冲区比较
var result = buffer1.compare(buffer2);
if (result < 0) {
  console.log(buffer1 + "在 " + buffer2 + "之前");
} else if (result == 0) {
  console.log(buffer1 + "与 " + buffer2 + "相同");
} else {
  console.log(buffer1 + "在 " + buffer2 + "之后");
}

// 拷贝缓冲区
// 待完成

// 缓冲区裁剪
// 待完成

// 缓冲区长度
// 待完成
