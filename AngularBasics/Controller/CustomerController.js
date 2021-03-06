﻿/// <reference path="../Services/Customer.js" />
var customerApp = angular.module("customerApp")

.controller("customerController", ["$log", "CustomerService", function ($log, customerService) {

    var customerCtrl = this;

    customerCtrl.list = [];

    customerCtrl.getCustomerList = function () {
        var getCustomerPromise = customerService.getCustomerList();

        getCustomerPromise.then(function (result) {
            customerCtrl.list = result;
            $log.log(result);
        })
    };

    customerCtrl.getCustomer = function (customerID) {
        customerCtrl.selectedCustomer = customerService.getCustomer(customerID);
    }

}]);
