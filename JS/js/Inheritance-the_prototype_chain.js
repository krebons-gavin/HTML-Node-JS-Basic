// 2016-02-20, Added by Gavin
// 继承与原型链
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// 例1：继承方法
var o={
	a:2,
	m: function () {
		 return this.a+1;
	}
};

console.log(o.m());
// 3
// 当调用 o.m 时,'this'指向了o.

var p= Object.create(o);
// p是一个对象, p.[[Prototype]]是o.


p.a=12;
// 创建 p 的自身属性a.

console.log(p.m());
// 13
// 调用 p.m 时, 'this'指向 p. 
// 又因为 p 继承 o 的 m 函数
// 此时的'this.a' 即 p.a，即 p 的自身属性 'a' 


// 例2：使用构造器创建对象
function Graph () {
	 this.vertexes=[];
	 this.edges=[];
}

Graph.prototype={
	addVertex: function (v) {
		 this.vertexes.push(v);
	}
};

var g=new Graph();
