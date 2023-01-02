
var app=angular.module("myApp",[])
var app=angular.module("myApp",["ngRoute"])
app.config(function($routeProvider){
    $routeProvider

    .when("/",{
        templateUrl: "./first.html",
        controller: "FirstController"
    })

    .when("/second",{
        templateUrl: "./second.html",
        controller: "SecondController"
    })

    .when("/third",{
        templateUrl: "./third.html",
        controller: "ThirdController"
    })

    .otherwise({redirectTo: "/"})
});


app.controller("FirstController",function($scope, $http){
    $http.get("https://parthsoni4.github.io/web/employee.json")
    .success(function(response)
    {
        $scope.employee=response.records;
    })
    // $scope.message="hello from first";
});

app.controller("SecondController",function($scope){
    $scope.message="This is a Admin Section";
});

app.controller("ThirdController",function($scope, $http){
    // $scope.message="hello from Third";
    $http.get("https://parthsoni4.github.io/web/employee.json")
    .success(function(response)
    {
        $scope.employee=response.records;
    })
});
