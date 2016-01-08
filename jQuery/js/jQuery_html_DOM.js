/**
 * Created by Gavin on 2015-8-13.
 * Modified by Gavin on 2015-8-13.
 * http://www.runoob.com/jquery/jquery-hide-show.html
 */

// 文档准备就绪事件
$(document).ready(function(){
    // 选取 HTML 元素，并对选取的元素执行某些操作
    // 显示文本
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });

    // 显示html
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });

    // 显示输入的内容
    $("button.input").click(function(){
        alert("您输入的值是："+$("#input").val());
    });

    // 设置内容
    $("#btn3").click(function(){
        $("#test1").text("Hello Gavin!");
    });
    $("#btn4").click(function(){
        $("#test2").html("<b>Hello world!</b>");
    });
    $("#btn5").click(function(){
        $("#test3").val("Krebons Gavin");
    });
});