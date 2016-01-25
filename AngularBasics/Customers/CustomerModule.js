var app = new angular.module('custModule',[]);

app.controller('custController', function () {
    var customerCtrl = this;

    customerCtrl.customerList = [];

    customerCtrl.customer = {};

    customerCtrl.addCustomer = function () {
        customerCtrl.customerList.push(customerCtrl.customer);
        customerCtrl.customer = {};
    };
});