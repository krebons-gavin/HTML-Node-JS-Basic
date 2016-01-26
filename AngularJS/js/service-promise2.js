/**
 * Created by Gavin on 2016/1/26.
 * http://markdalgleish.com/2013/06/using-promises-in-angularjs-views/
 */

'use strict';

angular.module('myApp', [])

    // 自定义服务
    .factory('HelloWorld', function ($q, $timeout) {
        var getMessages = function () {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve(['Hello', 'Gavin!']);
            }, 2000);

            return deferred.promise;
        };

        return {
            getMessages: getMessages
        }
    })

    .controller('myController', function ($scope, HelloWorld) {
        HelloWorld.getMessages().then(function(messages){
            $scope.messages=messages;
        });

        //$scope.messages = HelloWorld.getMessages();
        //不起作用
    });


