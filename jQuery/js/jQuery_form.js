/**
 * Created by Gavin on 16/1/24.
 * https://api.jquery.com/focusin/
 */


$(document).ready(function(){
    $("p").focusin(function(){
       $(this).find("span").css("display","inline").fadeOut(1000);
    });

    // https://api.jquery.com/select/
    $(":input").select(function(){
       $("div.myselect").text("Something was selected").show().fadeOut(2000);
    });
});