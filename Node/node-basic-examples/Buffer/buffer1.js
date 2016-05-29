// 2016-05-29, Added by Gavin
// Buffer-缓冲区，例1
// http://www.runoob.com/nodejs/nodejs-buffer.html

// Buffer 类用来创建一个专门存放二进制数据的缓存区。
// 一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
// 如果 buffer 空间不足， 则只会写入部分字符串。

buf = new Buffer(256);
len = buf.write("www.runoob.com");

console.log("写入字节数： " + len);
