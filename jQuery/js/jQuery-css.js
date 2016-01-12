/**
 * Created by Gavin on 2016/1/12.
 */

$(document).ready(function () {
    // 添加CSS类
    $("button.addClass").click(function () {
        $("h1, h2, p").addClass("blue");
        //$("div").addClass("important");
        $("#div2").addClass("important blue");
    });

    // 移除CSS类
    $("button.remove").click(function () {
        $("h1,h2,p").removeClass("blue");
    });

    // 颜色切换
    $("button.toggle").click(function(){
        $("#div2").toggleClass("blue");
    });

    // CSS方法
    $("button.green").click(function(){
        $("p.green").css({"background-color":"yellow","font-size":"200%"});
        alert("Background color = "+$("p.green").css("background-color"));
    });
});