/// <reference path="../Scripts/angular.js" />

var app = new angular.module('ordModule', []);

app.controller("orderController", ["$http", function ($http) {
    var orderCtrl = this;
    orderCtrl.getOrders = function () {
        $http({
            method: 'GET',
            url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Orders'
        }).then(function successCallback(response) {
            orderCtrl.orderList = response.data.value;
            console.log(response);
        })
    };
}]);