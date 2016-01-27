/**
 * Created by Gavin on 16/1/24.
 * https://api.jquery.com/focusin/
 */


$(document).ready(function(){
    $("p").focusin(function(){
       $(this).find("span").css("display","inline").fadeOut(1000);
    });

    $("form").submit(function(){
        if($("div.myform").find("input:first").val()=="correct"){
            $("span.result").text("Validated...").show();
            return true;
        }
        $("span.result").text("Not Valid").show().fadeOut(3000);
        return false;
    });
});