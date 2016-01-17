/**
 * Created by Gavin on 2016-01-17.
 * http://www.jb51.net/article/58229.htm
 */

angular.module('myApp', [])

    // 父控制器
    .controller("myCtrl", ['$scope', function ($scope) {
        $scope.person = {
            firstName: 'kre'
        };
    }])

    .directive('levelOne', createDirective('levelOne'))
    .directive('levelTwo', createDirective('levelTwo'))
    .directive('levelThree', createDirective('levelThree'));

function createDirective(name) {
    return function () {
        return {
            restrict: 'E',

            // 使用compile函数可以改变原始的dom(template element),在ng创建原始dom实例以及创建scope实例之前.
            compile: function (tElem, tAttrs) {
                //console.log(name + ': compile');
                console.log(name + ': compile => ' + tElem.html());
                return {
                    //pre-link函数能够保证在element实例上以及它的所有子指令的post-link运行之前执行.
                    // 使用pre-link函数可以运行一些业务代码在ng执行完compile函数之后,但是在它所有子指令的post-link函数将要执行之前.
                    // scope对象以及element实例将会做为参数传递给pre-link函数
                    pre: function (scope, iElem, iAttrs) {
                        //console.log(name + ': pre link');
                        console.log(name + ': pre link => ' + tElem.html());
                    },

                    // 如果你在定义指令的时候只使用了一个link函数,那么ng会把这个函数当成post-link来处理
                    // 使用post-link函数来执行业务逻辑,在这个阶段,它已经知道它所有的子指令已经编译完成并且pre-link以及post-link函数已经执行完成.
                    // scope实例以及element实例做为参数传递给post-link函数
                    post: function (scope, iElem, iAttrs) {
                        //console.log(name + ': post link');
                        console.log(name + ': post link => ' + tElem.html());
                    }
                }
            }
        }
    }
}