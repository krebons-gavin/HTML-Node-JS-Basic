/**
 * Created by Gavin on 2016/1/24.
 * http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
 */

'use strict';

angular.module('myApp', [])

    // 定义服务: MathService
    .service('ContactService', function () {
        // 创建唯一的用户ID
        var uid = 1;

        // 创建数组来保存所有联系人
        var contacts = [{
            id: 0,
            'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2134-44'
        }];

        // 函数:保存联系人
        this.save = function (contact) {
            if (contact.id == null) {
                contact.id = uid++;
                contacts.push(contact);
            }
            else {
                for (var i in contacts) {
                    if (contacts[i].id = contact.id) {
                        contacts[i] = contact;
                    }
                }
            }
        };

        // 函数:获取联系人
        this.get = function (id) {
            for (var i in contacts) {
                if (contacts[i].id == id) {
                    return contacts[i];
                }
            }
        };

        // 函数:删除联系人
        this.delete=function(id){
            for(var i in contacts){
                if(contacts[i].id==id){
                    // splice函数???
                    contacts.splice(i,1);
                }
            }
        };

        // 联系人列表
        this.list = function () {
            return contacts;
        };

    })

    // 定义控制器
    .controller('ContactController', function ($scope, ContactService) {
        // 获取联系人列表
        $scope.contacts = ContactService.list();

        // 保存联系人
        // 注意:编辑以后保存会出错
        $scope.saveContact = function () {
            ContactService.save($scope.newcontact);
            $scope.newcontact = {};
        };

        // 删除联系人
        // 注意:直接删除id=0的数据会出错
        $scope.delete = function (id) {
            ContactService.delete(id);
            if ($scope.newcontact.id = id) {
                $scope.newcontact = {};
            }
        };

        // 编辑联系人
        // 注意:编辑以后保存会出错
        $scope.edit = function (id) {
            // copy 函数???
            $scope.newcontact = angular.copy(ContactService.get(id));
        }
    });