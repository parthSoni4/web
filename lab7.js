angular.module("mycustomer",[])
.filter("myfilter",function()
{
    return function(input,option)
    {
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else{
            return input.substring(0,option).toUpperCase();
        }
    }
})
.filter("myfilter2",function()
{
    return function(input)
    {
        if(input>2)
        {
            return input+"  ("+input*250+"rs extra)";
        }
        else{
            // customer.charge=1000;
            return input
        }
    }
})
.filter("myfilter3",function()
{
    return function(input)
    {
        if(input>55)
        {
            return input+ "  (5% discount)";
        }
        else{
            return input;
        }
    }
})
.controller("custcontrol",function($scope)
{
    var customer=[
        {name:'parth',dob:new Date("august 4, 2000"), gender:"Male",charge:100000000000.75,city:"udaipur",roomType:"super delux", totalpeople:2, age:10},
        {name:'Raj',dob:new Date("august 8, 2000"), gender:"Male",charge:1000000.75, city:"karnataka", roomType:"delux", totalpeople:4, age:30},
        {name:'sushmita',dob:new Date("july 4, 2000"), gender:"female",charge:56600.75, city:"ranchi",roomType:"general", totalpeople:3, age:57},
        {name:'Abhishek',dob:new Date("july 14, 2000"), gender:"male",charge:56600.75, city:"ranchi",roomType:"delux", totalpeople:3, age:57},


    ];
    $scope.customer=customer;
    $scope.rowlimit=6;
    $scope.SortOrder="+name";
});