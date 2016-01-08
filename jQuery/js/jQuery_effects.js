/**
 * Created by Gavin on 2015-8-12.
 * Modified by Gavin on 2015-8-13.
 * http://www.runoob.com/jquery/jquery-hide-show.html
 */

// 文档准备就绪事件
$(document).ready(function(){
    // 选取 HTML 元素，并对选取的元素执行某些操作
    // 双击隐藏所有的段落
    $("p.test").dblclick(function(){
        $(this).hide();
    });

    $("#popup").mousedown(function(){
        alert("鼠标在该段落上按下。");
    });

    // 点击按钮之后id为test的段落隐藏
    $("button.hide").click(function(){
        $("p#test").hide(1000);
        $("ul li:first-child").hide(500);
    });

    // 点击按钮之后id为test的段落显示
    $("button.show").click(function(){
        $("p#test").show(300);
        $("ul li:first-child").show(300);
    });

    // toggle 方法的测试
    $("button.tog").click(function(){
        $("p.toggle").toggle(600);
    });

    // fadeIn()方法
    $("button.fadein").click(function(){
       $("#div1").fadeIn();
       $("#div2").fadeIn("slow");
       $("#div3").fadeIn(3000);
    });

    // fadeOut()方法
    $("button.fadeout").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });

    // fadeToggle()方法
    $("button.fadetoggle").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });

    // 向上/下滑动元素
    $("div.flip").click(function(){
        $("div.panel").slideUp("slow");
    });

    // 链接-Chaining
    $("button.chaining").click(function(){
        $("#p1").css("color","red").slideUp(2000).slideDown(2000);
    });
});