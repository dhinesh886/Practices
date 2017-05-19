// define and register module
var homeModule = angular.module("homeModule", ['ngRoute']);

// define and register route
homeModule.config(function ($routeProvider) {

    $routeProvider
    .when('/',
       {
           templateUrl: 'Modules/Views/home.html',
           controller: 'homeController',
           controllerAs: 'homeControllerVm'
       })
     .when('/home',
       {
           templateUrl: 'Modules/Views/home.html',
           controller: 'homeController',
           controllerAs: 'homeControllerVm'
       })
     .when('/otherwise',
       {
           templateUrl: 'Modules/Views/home.html',
           controller: 'homeController',
           controllerAs: 'homeControllerVm'
       })
    .otherwise('/otherwise')
});

