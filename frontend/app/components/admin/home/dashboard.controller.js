angular.module('buildingChain')
    .controller('dashboardController', function ($rootScope, $scope, $location,SweetAlert) {
        $scope.init = function () {
            $scope.reloadScripts();
        }
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "js/chart/initMap.js";

            document.head.appendChild(script);
        }

        $scope.init();
    })