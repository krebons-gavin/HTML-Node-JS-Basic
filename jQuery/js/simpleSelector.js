/**
 * Created by Gavin on 2015-8-12.
 */

// 文档准备就绪事件
$(document).ready(function(){
    // 选取 HTML 元素，并对选取的元素执行某些操作
    // 隐藏所有 class="test" 的段落
    $("p.test").click(function(){
        $(this).hide();
    });

    // 点击按钮之后id为test的段落
    $("button").click(function(){
        $("p#test").hide();
        $("ul li:first-child").hide();
    });
});