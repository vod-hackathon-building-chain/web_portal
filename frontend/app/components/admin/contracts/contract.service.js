var app = angular.module('buildingChain');

app.service('contractService' , function ($http, $rootScope) {
    this.getAll = function(cb){
        $http({
            method: 'GET',
            url: $rootScope.backendURL + "contract"
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
            url: $rootScope.backendURL + "contract/"+d.id,
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