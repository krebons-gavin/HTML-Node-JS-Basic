/**
 * Created by Gavin on 2015-8-22.
 */

$(document).ready(function(){
    $(".ancestors").children().css({"color":"green","border":"2px solid red"});
    $( "span" ).css("background-color", "red" );
    $( "span" ).parent().css({"background-color":"gray","color":"red"});

    $("div p").last().css("background-color","yellow");

    $("p").filter(".intro").css("background-color","green");
})
