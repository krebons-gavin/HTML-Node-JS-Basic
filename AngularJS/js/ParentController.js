/**
 * Created by Gavin on 2016-01-17.
 * https://rclayton.silvrback.com/parent-child-controller-communication
 */

angular.module('myApp', [])

    // ¸¸¿ØÖÆÆ÷
    .controller("ParentCtrl", ['$scope', function ($scope) {
        $scope.person = {
            firstName: 'kre'
        };
    }])

    .controller("ChildCtrl", ['$scope', function ($scope) {
        $scope.person = {
            lastName: 'Gavin'
        };
    }]);