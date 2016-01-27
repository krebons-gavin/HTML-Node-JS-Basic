/**
 * Created by Gavin on 16/1/27.
 * http://www.jquery123.com/val/
 */


$(document).ready(function(){
    function displayVals(){
        var singleValues=$("#single").val();
        var mutipleValues=$("#multiple").val()||[];
        $("p").html("<b>Single: </b>"+
                singleValues+
                "<b>Multiple: </b>"+mutipleValues.join(", "));
    }

    $("select").change(displayVals);
    displayVals;

});