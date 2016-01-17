/**
 * Created by Gavin on 2016-01-17.
 * http://www.jb51.net/article/58229.htm
 */

angular.module('myApp', [])

    // ��������
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

            // ʹ��compile�������Ըı�ԭʼ��dom(template element),��ng����ԭʼdomʵ���Լ�����scopeʵ��֮ǰ.
            compile: function (tElem, tAttrs) {
                //console.log(name + ': compile');
                console.log(name + ': compile => ' + tElem.html());
                return {
                    //pre-link�����ܹ���֤��elementʵ�����Լ�����������ָ���post-link����֮ǰִ��.
                    // ʹ��pre-link������������һЩҵ�������ngִ����compile����֮��,��������������ָ���post-link������Ҫִ��֮ǰ.
                    // scope�����Լ�elementʵ��������Ϊ�������ݸ�pre-link����
                    pre: function (scope, iElem, iAttrs) {
                        //console.log(name + ': pre link');
                        console.log(name + ': pre link => ' + tElem.html());
                    },

                    // ������ڶ���ָ���ʱ��ֻʹ����һ��link����,��ông��������������post-link������
                    // ʹ��post-link������ִ��ҵ���߼�,������׶�,���Ѿ�֪�������е���ָ���Ѿ�������ɲ���pre-link�Լ�post-link�����Ѿ�ִ�����.
                    // scopeʵ���Լ�elementʵ����Ϊ�������ݸ�post-link����
                    post: function (scope, iElem, iAttrs) {
                        //console.log(name + ': post link');
                        console.log(name + ': post link => ' + tElem.html());
                    }
                }
            }
        }
    }
}