/// <reference path="../Scripts/angular.js" />

var app = new angular.module('ordModule', []);

app.controller("orderController", ["$http", function ($http) {
    var orderCtrl = this;
    orderCtrl.isLoaded = true;
    orderCtrl.getOrders = function () {
        orderCtrl.isLoaded = false;
        $http({
            method: 'GET',
            url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Orders?$top=20'
        }).then(function successCallback(response) {
            orderCtrl.isLoaded = true;
            orderCtrl.orderList = response.data.value;
            console.log(response);
        })
    };

    orderCtrl.clearOrders = function () {
        orderCtrl.orderList = {};
    };

    orderCtrl.getOrder = function (currentOrder) {
        orderCtrl.currentOrder = currentOrder;
    };
}]);