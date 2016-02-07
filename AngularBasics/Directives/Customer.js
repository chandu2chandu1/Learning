var customerApp = angular.module("customerApp")

.directive("customerList", function () {
    return {
        restrict:"E",
        templateUrl: "../Views/Customer/customer-list.html"
    };
})

.directive("customerItem", function () {
    return {
        restrict: "E",
        templateUrl: "../Views/Customer/customer-item.html"
    }
})