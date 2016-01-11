/**
 * Created by Gavin on 16/1/11.
 */

// 在 JavaScript中，几乎所有的事物都是对象。

// 文档准备就绪事件
$(document).ready(function () {
    var person = {
        firstName: "Kre",
        lastName: "Gavin",
        age: 30,
        eyeColor: "blue",
        fullName:function(){
            return this.firstName + " " + this.lastName;
        }
    };

    document.getElementById("demo").innerHTML =
        person.firstName + " is " + person.age + " years old.";

    //document.getElementById("demo2").innerHTML =
    //    person["firstName"] + " " + person["lastName"];

    document.getElementById("demo2").innerHTML=
        person.fullName();
});