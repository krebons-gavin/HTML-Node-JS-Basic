/**
 * Created by Gavin on 2016/1/24.
 * http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
 */

'use strict';

angular.module('myApp', [])

    // 定义服务: MathService
    .service('MathService', function () {
        // 加法
        this.add = function (a, b) {
            return a + b;
        };

        // 减法
        this.subtract = function (a, b) {
            return a - b;
        };

        // 乘法
        this.multiply = function (a, b) {
            return a * b;
        };

        // 除法
        this.divide = function () {
            return a / b;
        };
    })

    // 定义服务: CalculatorService
    // 依赖于服务: MathService
    .service('CalculatorService', function (MathService) {
        // 计算a的平方
        this.square = function (a) {
            return MathService.multiply(a, a);
        };

        // 计算a的立方
        this.cube = function (a) {
            return MathService.multiply(a, MathService.multiply(a, a));
        };
    })

    // 定义控制器: CalculatorController
    // 注入: $scope 及服务 CalculatorService
    .controller('CalculatorController', function ($scope, CalculatorService) {
        // 计算输入数字的平方
        $scope.doSquare = function () {
            $scope.answer = CalculatorService.square($scope.number);
        };

        // 计算输入数字的立方
        $scope.doCube = function () {
            $scope.answer = CalculatorService.cube($scope.number);
        };
    });