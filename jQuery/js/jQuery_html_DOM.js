/**
 * Created by Gavin on 2015-8-13.
 * Modified by Gavin on 2015-8-13.
 * http://www.runoob.com/jquery/jquery-hide-show.html
 */

// �ĵ�׼�������¼�
$(document).ready(function(){
    // ѡȡ HTML Ԫ�أ�����ѡȡ��Ԫ��ִ��ĳЩ����
    // ��ʾ�ı�
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });

    // ��ʾhtml
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });

    // ��ʾ���������
    $("button.input").click(function(){
        alert("�������ֵ�ǣ�"+$("#input").val());
    });

    // ��������
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