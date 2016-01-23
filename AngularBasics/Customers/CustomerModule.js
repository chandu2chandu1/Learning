var app = new angular.module('custModule',[]);

app.controller('custController',function(){
    var customerCtrl=this;
    
    customerCtrl.customerList=[];
    
    customerCtrl.customer={};
    customerCtrl.addCustomer=function(){
            console.log(customerCtrl.customer);
    };
});