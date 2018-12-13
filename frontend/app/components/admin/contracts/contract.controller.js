angular.module('buildingChain')
    .controller('contractController', function ($rootScope, $scope, $location,SweetAlert,contractService) {
        $scope.data=[];
        $scope.init = function () {
            // 
            contractService.getAll(function(res,err){
                if(!err){
                    $scope.data = res.data;
                    $scope.reloadScripts();
                }
            })
        }
        $scope.approve=function(d){
            d.approvedByGovernment=1;
            contractService.update(d,function(res,err){
                if(!err){
                    SweetAlert.swal("Good job!", "The contract accepted successfully", "success");
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