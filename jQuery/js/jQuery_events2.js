/**
 * 2015-08-12, Created by Gavin.
 * 2015-12-06, Modified by Gavin.
 * 2016-01-18, Modified by Gavin.
 */

// 文档准备就绪事件
$(document).ready(function () {


    // .bind( eventType [, eventData ], handler(eventObject) )
    // 为一个元素绑定一个事件处理程序。
    // http://www.css88.com/jqapi-1.9/bind/
    // https://api.jquery.com/bind/

    $("p.p1").bind("click", function (event) {
        var str = "( " + event.pageX + ", " + event.pageY + " )";
        $("span.span1").text("Click happened! " + str);
    });
    $("p.p1").bind("dblclick", function () {
        $("span.span1").text("Double-click happened in " + this.nodeName);
    });
    $("p.p1").bind("mouseenter mouseleave", function (event) {
        $(this).toggleClass("over");
    });

    // 自定义绑定事件
    $("p.customp").bind("myCustomEvent", function (e, myName, myValue) {
        $(this).text(myName + ", hi there!");
        $("span.customspan").stop().css("opacity", 1)
            .text("myName = " + myName)
            .fadeIn(30).fadeOut(1000);
    });

    $("button").click(function () {
        $("p.customp").trigger("myCustomEvent", ["Gavin"]);
    });

});