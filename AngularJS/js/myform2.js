/**
 * Created by Gavin on 2016/1/24.
 * http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
 * 正则表达式
 * http://www.regexlab.com/zh/regref.htm
 */

'use strict';

var app = angular.module('myForm', []);

// 定义正则表达式: - 零次到一次, 数字至少一次
// ^ 匹配开头       $ 匹配结尾
// \d  数字
var INTEGER_REGEXP = /^\-?\d+$/;

// 定义指令:integer
app.directive('integer', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.integer = function (modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    return true;
                }

                if (INTEGER_REGEXP.test(viewValue)) {
                    return true;
                }

                return false;
            };
        }
    };
});


// 定义指令: username
app.directive('username', function ($q, $timeout) {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            var usernames = ['Jim', 'John', 'Jill', 'Gavin'];

            ctrl.$asyncValidators.username = function (modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    return $q.when();
                }

                var def = $q.defer();

                $timeout(function () {
                    if (usernames.indexOf(modelValue) === -1) {
                        def.resolve();
                    } else {
                        def.reject();
                    }
                }, 2000)

                return def.promise;
            };
        }
    };
});


