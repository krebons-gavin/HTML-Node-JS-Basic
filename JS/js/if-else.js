/**
 * Created by Gavin on 2016/1/12.
 */

function greetings() {
    var x = "";
    var time = new Date().getHours();
    if (time < 10) {
        x = "Good Morning!";
    }
    else if (time >= 10 && time < 16) {
        x = "Good Afternoon!";
    }
    else {
        x = "Good Evening!";
    }

    document.getElementById("demo").innerHTML = x;
}