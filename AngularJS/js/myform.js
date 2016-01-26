/**
 * Created by Gavin on 2016/1/24.
 * http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
 */

'use strict';

angular.module('myApp', [])

    .controller('UserController', ['$scope', function ($scope) {
        $scope.master={};

        $scope.update=function(user){
            $scope.master=angular.copy(user);
        };

        $scope.reset =function(form){
            if(form){
                form.$setPristine();
                form.$setUntouched();
            }
            $scope.user=angular.copy($scope.master);
        };

        $scope.reset();
    }]);

