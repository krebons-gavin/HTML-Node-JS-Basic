/**
 * 2015-08-12, Created by Gavin.
 * 2015-12-06, Modified by Gavin.
 */

// 文档准备就绪事件
$(document).ready(function(){
    // 选取 HTML 元素，并对选取的元素执行某些操作
    // 双击隐藏所有的段落
    $("p.test").dblclick(function(){
        $(this).hide();
    });

    $("p.multi").on({
        mouseenter:function(){
            $(this).css("background-color","lightblue");
        },

        mouseleave:function(){
            $(this).css("background-color","#497474");
        },

        click:function(){
            $(this).css("background-color","green");
        }
    });

    $("#popup").mousedown(function(){
        alert("Notice:鼠标在该段落上按下。");
    });

    // 点击按钮之后id为test的段落
    $("button").click(function(){
        $("p#test").hide();
        $("ul li:first-child").hide();
    });

    // blur:填充背景色
    $("input").blur(function(){
       $(this).css("background-color","rgb(123, 35, 35)") ;
    });

});