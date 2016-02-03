/// <reference path="../Scripts/angular.js" />

var app = new angular.module('ordModule', []);

app.controller("orderController", [function ($http) {
    //this.Orders = [
    //{
    //    id: 1,
    //    name: "Chandra"
    //}
    //];
    this.Orders = function () {
        $http({
            method: 'GET',
            url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Orders'
        }).then(function successCallback(response) {
            alert("Response loaded");
            console.log(response);
        })
    };
}]);