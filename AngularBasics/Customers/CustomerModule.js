var app = new angular.module('custModule', []);

app.directive('customerList', function () {
    return {
        restrict: 'E',
        templateUrl:'customer-list.html'
    };
});

app.controller('custController', function () {
    var customerCtrl = this;

    //Initialize with dummy data
    customerCtrl.customerList = [
           {
               "firstName": "Chandra",
               "lastName": "Sekhar",
               "country": "India",
               "gender":"Male",
               "email": "chandu2chandu1@gmail.com",
               "dateOfBirth": "2016-01-30T18:30:00.000Z"
           },
           {
               "firstName": "Lakshith",
               "lastName": "CS",
               "dateOfBirth": "2016-01-27T18:30:00.000Z",
               "gender": "Male",
               "country": "USA",
               "email": "slakshithcs@gmail.com"
           },
           {
               "firstName": "Amitabh",
               "lastName": "Bacchan",
               "dateOfBirth": "1963-10-08T18:30:00.000Z",
               "country": "India",
               "gender": "Male",
               "email": "amitabh@bacchan.com"
           }
        ];

    customerCtrl.customer = {};

    customerCtrl.addCustomer = function () {
        customerCtrl.customerList.push(customerCtrl.customer);
        customerCtrl.customer = {};
    };
});