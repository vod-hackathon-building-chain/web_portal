angular.module('buildingChain')
    .controller('buildingController', function ($rootScope, $scope, $location,SweetAlert,buildingService) {
        $scope.data=[];
        $scope.init = function () {
            // 
            buildingService.getAll(function(res,err){
                if(!err){
                    $scope.data = res.data;
                    $scope.reloadScripts();
                }
            })
        }
        $scope.approve=function(d){
            d.approved=1;
            buildingService.update(d,function(res,err){
                if(!err){
                    SweetAlert.swal("Good job!", "The Building updated successfully", "success");
                }else{
                    SweetAlert.swal("Error", "an error occuers", "error");
                }
            })
        }
        $scope.reloadScripts = function(){
            var script = document.createElement('script');

            script.src = "js/demo/datatables-demo.js";

            document.head.appendChild(script);
        }

        $scope.init();
    })