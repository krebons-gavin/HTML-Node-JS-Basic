/**
 * Created by Gavin on 16/1/14.
 *  https://gist.github.com/blaryjp/8548592
 *  运行状态良好
 */

'use strict';

angular.module('angularApp',[])

    // 自定义Controller
    .controller('DateTimeCtrl',['$scope',function($scope){
        //$scope.publishDate3= moment().format('YYYY-MM-DD HH:mm A');

        $scope.vm = {
            message: "Bootstrap DateTimePicker Directive",
            myDate: moment().format('YYYY-MM-DD'),
            myTime: moment().format('HH:mm A'),
            myDateTime: moment().format('YYYY-MM-DD HH:mm A')
        };

    }])

    // https://github.com/diosney/angular-bootstrap-datetimepicker-directive/blob/master/angular-bootstrap-datetimepicker-directive.js
    // 配置: 设置默认的属性值
    .provider('datetimeoption', function () {
        var default_options = {
            //disabledDates: [
            //    // moment("12/25/2013")
            //    // 上面的方法已经启用,改用下面的方法
            //    moment("2016-01-25","YYYY-MM-DD")
            //],
            //daysOfWeekDisabled: [0, 6]
        };

        // 设置默认属性
        this.setOptions = function (options) {
            default_options = options;
        };

        // 获取默认属性
        this.$get = function () {
            return {
                getOptions: function () {
                    return default_options;
                }
            };
        };
    })

    // 自定义指令,实现数据双向绑定
    .directive('dtpicker', [
        '$timeout',
        'datetimeoption',
        function ($timeout,
                  datetimeoption) {

            // 调用默认设置
            var default_options = datetimeoption.getOptions();

            return {
                require : '?ngModel',
                restrict: 'AE',
                scope   : {
                    datetimepickerOptions: '@'
                },

                // 链接
                link    : function ($scope, $element, $attrs, ngModelCtrl) {
                    var passed_in_options = $scope.$eval($attrs.datetimepickerOptions);
                    var options = jQuery.extend({}, default_options, passed_in_options);

                    $element
                        // 监测模型的值得改变
                        .on('dp.change', function (e) {
                            if (ngModelCtrl) {
                                $timeout(function () {
                                    ngModelCtrl.$setViewValue(e.target.value);
                                });
                            }
                        })

                        // 显示日期选择控件及其设置
                        .datetimepicker(options);

                    // 设置datepicker的值
                    function setPickerValue() {
                        var date = options.defaultDate || null;

                        if (ngModelCtrl && ngModelCtrl.$viewValue) {
                            date = ngModelCtrl.$viewValue;
                        }

                        $element
                            .data('DateTimePicker')
                            .date(date);
                    }

                    if (ngModelCtrl) {
                        ngModelCtrl.$render = function () {
                            setPickerValue();
                        };
                    }

                    // 调用函数:setPickerValue()
                    setPickerValue();
                }
            };
        }
    ]);