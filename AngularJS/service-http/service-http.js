/**
 * Created by Gavin on 2016/1/26.
 * https://docs.angularjs.org/api/ng/service/$http
 * http://plnkr.co/edit/?p=preview
 */

(function(angular) {
    'use strict';
    angular.module('httpExample', [])
        .controller('FetchController', ['$scope', '$http', '$templateCache',
            function($scope, $http, $templateCache) {
                $scope.method = 'GET';
                $scope.url = 'http-hello.html';

                $scope.fetch = function() {
                    $scope.code = null;
                    $scope.response = null;

                    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
                    then(function(response) {
                        $scope.status = response.status;
                        $scope.data = response.data;
                    }, function(response) {
                        $scope.data = response.data || "Request failed";
                        $scope.status = response.status;
                    });
                };

                $scope.updateModel = function(method, url) {
                    $scope.method = method;
                    $scope.url = url;
                };
            }]);
})(window.angular);

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */