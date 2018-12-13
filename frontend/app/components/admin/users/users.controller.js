angular.module('buildingChain')
    .controller('usersController', function ($rootScope, $scope, $location,SweetAlert,userService) {
        $scope.users=[];
        $scope.init = function () {
            // $scope.reloadScripts();
            userService.getAllUsers(function(res,err){
                if(!err){
                    $scope.users = res.data;
                }
            })
        }
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "js/chart/initMap.js";

            document.head.appendChild(script);
        }

        $scope.init();
    })