angular.module('buildingChain').config(function ($routeProvider, $ocLazyLoadProvider) {

    $routeProvider.when('/login', {
        templateUrl: "./app/components/auth/login.html",
        controller: 'loginRegisterController',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        "./app/components/auth/login.register.controller.js",
                        "./app/components/auth/login.register.service.js"
                    ]
                });
            }]
        }
    }).when('/admin/home', {
        templateUrl: "../app/components/admin/home/dashboard.html",
        
    }).when('/home', {
        templateUrl: "../app/components/home/index.html",

    })
    .otherwise({
        redirectTo: "/home"
    });
});




