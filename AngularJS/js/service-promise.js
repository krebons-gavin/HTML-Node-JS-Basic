/**
 * Created by Gavin on 2016/1/24.
 * http://segmentfault.com/a/1190000002788733
 */

'use strict';

angular.module('myApp', [])

    // 自定义控制器
    .controller('myController', ["$scope", "$q", function ($scope, $q) {
        $scope.flag = true;

        $scope.handle = function () {
            // 创建了一个deferred对象
            var deferred = $q.defer();

            // 创建了一个promise对象
            var promise = deferred.promise;

            promise.then(function (result) {
                result = result + "you have passed the first then()";
                $scope.status = result;
                return result;
            }, function (error) {
                error = error + " Failed but you have passed the first then()";
                $scope.status = error;
                return error;
            }).then(function (result) {
                alert("Success: " + result);
            }, function (error) {
                alert("Fail: " + error);
            });

            if ($scope.flag) {
                deferred.resolve("You are lucky! ");
            } else {
                deferred.reject("Sorry, it lost! ");
            }
        }
    }]);

