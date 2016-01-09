/**
 * Created by Gavin on 2015-8-23.
 */

$(document).ready(function(){
    $("button").click(function(){
        $.post("./templates/demo-post.html",
            {
                name:"Krebons Gavin",
                city:"Beijing"
            },

            function(data,status){
                alert("Data:"+data+"\n Status: "+status);
            }
        ) ;
    });
})
