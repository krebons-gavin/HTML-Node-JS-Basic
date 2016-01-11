/**
 * Created by Gavin on 2015-8-19.
 */

angular.module('myApp',[])

.controller('UserInfoCtrl',['$scope',function($scope){
    $scope.greeting = {
        text: 'Hello'
    };

    $scope.userInfo={
        email:"251770233@qq.com",
        password:"251770233",
        autoLogin:true
    };

    $scope.getUserInfo=function(){
        console.log($scope.userInfo);
    };

    $scope.setUserInfo=function(){
        $scope.userInfo={
            email:"krebons@126.com",
            password:"251770234",
            autoLogin:false
        };
    };

    $scope.resetUserInfo=function(){
        $scope.userInfo={
            email:"251770233@qq.com",
            password:"251770233",
            autoLogin:true
        };
    }
}])

.directive('myDirective',function(){
    return{
        restrict:'A',
        replace:true,
        scope:{
            myUrl:'=someAttr',      // °ó¶¨htmlÖÐµÄ some-attr
            myLinkText:'@'
        },
        template:'\
        <div>\
            <label>My Url Field:</label>\
            <input type="text"\
            ng-model="myUrl"/>\
            <a href="{{myUrl}}">{{myLinkText}}</a>\
            </div>'
    };
});