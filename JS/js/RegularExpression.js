/**
 * Created by Gavin on 2016/1/11.
 */

// 在 JavaScript中，几乎所有的事物都是对象。
// 正则表达式是由一个字符序列形成的搜索模式。
// 正则表达式可用于所有文本搜索和文本替换的操作。

// jQuery文档准备就绪事件
// 例1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
function testInfo(phoneInput) {
    var OK = re.exec(phoneInput.value);
    if (!OK)
        window.alert(phoneInput.value + " isn't a phone number with area code!");
    else
        window.alert("Thanks, your phone number is " + OK[0]);
}

// 例2 - Search 方法
// http://www.runoob.com/js/js-regexp.html
function myFunction() {
    var str = "Visit W3cSchool!";
    var n = str.search(/w3cSchool/i);
    document.getElementById("demo").innerHTML = n;
}
// 正则表达式通常用于两个字符串方法 : search() 和 replace()
// search() 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。
// replace() 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

// 例3 - Replace 方法
// http://www.runoob.com/js/js-regexp.html
function myReplace(){
    var str=document.getElementById("demo2").innerHTML;
    var txt=str.replace(/w3cSchool/i, "Gavin");
    document.getElementById("demo2").innerHTML=txt;
}

//  特殊字符的含义:开始
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
//  \ 做为转意
//  ^ 匹配一个输入或一行的开头      /^a/匹配"an A"，而不匹配"An a"
//  $ 匹配一个输入或一行的结尾      /a$/匹配"An a"，而不匹配"an A"
//  * 匹配前面元字符0次或多次       /ba*/将匹配b,ba,baa,baaa
//  + 匹配前面元字符1次或多次，     /ba+/将匹配ba,baa,baaa
//  ? 匹配前面元字符0次或1次，      /ba?/将匹配b,ba
//  . 除换行符和其他Unicode行终止符之外的任意字符。
//  | 或者                       x|y 匹配x或y
//  {n} 精确匹配n次
//  {n,} 匹配n次以上
//  {n,m} 匹配n-m次
//  [xyz] 字符集(character set)，匹配这个集合中的任一一个字符(或元字符)
//  [\b] 匹配一个退格符
//  \b 匹配一个单词的边界
//  \B 匹配一个单词的非边界
//  \w 任何单字字符，相当于[a-zA-X0-9_]
//  \W 匹配一个不可以组成单词的字符，如[\W]匹配"$5.98"中的$
//  特殊字符的含义:结束