/**
 * Created by Gavin on 2016/1/27.
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures
 */

function showHelp(help){
    document.getElementById('help').innerHTML=help;
}

// 闭包函数
function makeHelpCallback(help){
    return function (){
        showHelp(help);
    }
}

function setupHelp(){
    var helpText=[
        {'id':'email','help':'Your email address'},
        {'id':'name','help':'Your full name'},
        {'id':'age','help':'Your age (You must be over 16)'}
    ];

    for (var i=0; i<helpText.length; i++){
        var item=helpText[i];

        // 使onfocus指向一个新的闭包对象
        document.getElementById(item.id).onfocus=
            makeHelpCallback(item.help);
    }
}

setupHelp();