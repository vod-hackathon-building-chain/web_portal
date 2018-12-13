var app = angular.module('buildingChain');

app.service('userService' , function ($http, $rootScope) {
    this.getAllUsers = function(cb){
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "users"
        }).then(
            function successCallback(res) {
                if (res.status == 500) {
                    cb(null, res);
                } else {
                    cb(res);
                }
            },
            function errorCallback(err) {
                cb(null, err);
            })
    };
})