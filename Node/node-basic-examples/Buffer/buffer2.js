// 2016-05-29, Added by Gavin
// Buffer-缓冲区，例2
// http://www.runoob.com/nodejs/nodejs-buffer.html

buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
  buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
// 结果：  abcdefghijklmnopqrstuvwxyz

console.log(buf.toString('ascii', 0, 5));
// 结果：  abcde

console.log(buf.toString('utf8', 0, 5));
// 结果：  abcde

console.log(buf.toString(undefined, 0, 5));
// 结果：  abcde

// 将 Buffer 转换为 JSON 对象
var json = buf.toJSON(buf);
console.log(json);
