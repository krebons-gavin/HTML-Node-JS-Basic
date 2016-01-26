/**
 * Created by admin on 2016/1/26.
 * http://jsfiddle.net/howdy39/B7SsX/
 */

angular.module('myApp', [])

    .controller('elementCtrl', function ($scope) {
        $scope.count = 0;
        $scope.addCountByNgClick = function () {
            $scope.count++;
        }
    });

function addCount() {
    var now = angular.element(count).html();
    angular.element(count).html(++now);
}