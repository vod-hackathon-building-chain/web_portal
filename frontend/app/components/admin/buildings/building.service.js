var app = angular.module('buildingChain');

app.service('buildingService' , function ($http, $rootScope) {
    this.getAll = function(cb){
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "building"
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

    this.getOne = function(buildingId,cb){
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "building/buildingId/"+buildingId
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
    

    this.update= function(d,cb){
        $http({
            method: 'PUT',
            url: $rootScope.backendURL + "building/"+d.id,
            data:JSON.stringify(d)
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