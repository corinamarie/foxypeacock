var foxyApp = angular.module('foxyApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

foxyApp.config(['$routeProvider', function($routeProvider){
    console.log("angular routing up");
    $routeProvider.
        when('/gallery', {
            templateUrl: "assets/views/routes/gallery.html",
            controller: 'FoxyCtrl'
        }).
        when('/services', {
            templateUrl: "assets/views/routes/services.html",
            controller: 'FoxyCtrl'
        }).
        when('/about', {
            templateUrl: "assets/views/routes/about.html",
            controller: 'FoxyCtrl'
        }).
        when('/contact', {
            templateUrl: "assets/views/routes/contact.html",
            controller: 'FoxyCtrl'
        }).
        otherwise({
            redirectTo: "/home"
        })
}]);