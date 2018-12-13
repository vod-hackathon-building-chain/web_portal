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
        controller:"dashboardController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        "../app/components/admin/home/dashboard.controller.js",
                    ]
                });
            }]
        }
        
    }).when('/admin/users', {
        templateUrl: "../app/components/admin/users/users.html",
        controller:"usersController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        "../app/components/admin/users/users.controller.js",
                        "../app/components/admin/users/users.service.js"
                    ]
                });
            }]
        }
        
    }).when('/admin/buildings', {
        templateUrl: "../app/components/admin/buildings/buildings.html",
        controller:"buildingController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        "../app/components/admin/buildings/building.controller.js",
                        "../app/components/admin/buildings/building.service.js"
                    ]
                });
            }]
        }
        
        
    }).when('/admin/buildings/:buildingId', {
        templateUrl: "../app/components/admin/buildings/single.buildings.html",
        controller:"singleBuildingController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        "../app/components/admin/buildings/single.building.controller.js",
                        "../app/components/admin/buildings/building.service.js"
                    ]
                });
            }]
        }
        
        
    }).when('/admin/contracts', {
        templateUrl: "../app/components/admin/contracts/contracts.html",
        controller:"contractController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        "../app/components/admin/contracts/contract.controller.js",
                        "../app/components/admin/contracts/contract.service.js"
                    ]
                });
            }]
        }
        
    }).when('/admin/contracts/:contractId', {
        templateUrl: "../app/components/admin/contracts/single.contract.html",
        controller:"singleContractController",
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        "../app/components/admin/contracts/single.contract.controller.js",
                        "../app/components/admin/contracts/contract.service.js"
                    ]
                });
            }]
        }
        
    }).when('/admin/pending_contracts', {
        templateUrl: "../app/components/admin/pending_contracts/pending_contracts.html",
        // controller:"dashboardController",
        // resolve: {
        //     deps: ['$ocLazyLoad', function ($ocLazyLoad) {
        //         return $ocLazyLoad.load({
        //             files: [
        //                 "../app/components/admin/home/dashboard.controller.js",
        //             ]
        //         });
        //     }]
        // }
        
    }).when('/admin/statistics', {
        templateUrl: "../app/components/admin/statistics/statistics.html",
        // controller:"dashboardController",
        // resolve: {
        //     deps: ['$ocLazyLoad', function ($ocLazyLoad) {
        //         return $ocLazyLoad.load({
        //             files: [
        //                 "../app/components/admin/home/dashboard.controller.js",
        //             ]
        //         });
        //     }]
        // }
        
    }).when('/home', {
        templateUrl: "../app/components/home/index.html",

    })
    .otherwise({
        redirectTo: "/home"
    });
});




