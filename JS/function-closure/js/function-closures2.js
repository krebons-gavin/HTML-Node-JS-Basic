/**
 * Created by Gavin on 16/1/27.
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
 */

// 定义闭包函数:改变字体大小
function makeSizer(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
