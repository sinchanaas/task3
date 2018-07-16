var app=angular.module("myApp",[]);
var app=angular.module("myApp",["ngRoute"]);


app.config(function($routeProvider){
    $routeProvider.when("/login",{
        templateUrl:"views/login.html"
    }).
    when("/register",{
        templateUrl:"views/register.html"
    }).
    when("/about",{
        templateUrl:"views/about.html"
    }).
    when("/contact",{
        templateUrl:"views/contact.html"
    }).otherwise({
        redirectTo:"/login"
    })
});//route

app.controller("myCtr",function($scope,$http){
$http.get("data.json").then(function(item){
    $scope.posts=item.data;
})
})

