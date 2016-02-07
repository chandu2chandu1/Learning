/// <reference path="../Scripts/jquery-1.12.0.js" />
var customerApp = angular.module("customerApp",[]);

customerApp.factory("CustomerService", ["$http", "$log", function ($http, $log) {

    var customerList = [];

    var getCustomerList = function () {
        return $http({
            method: "GET",
            url: "http://services.odata.org/V4/Northwind/Northwind.svc/Customers?$top=20"
        }).then(function success(response) {
            $log.log(response);
            customerList = response.data.value;
            return response.data.value;
        });
    };

    var getCustomer = function(customerID){
        var customer = $.grep(customerList, function (item, i) {
            if (item.CustomerID == customerID)
                return item;
        });
        return customer[0];
    };

    return {
        getCustomerList: getCustomerList,
        getCustomer:getCustomer
    };

}]);