angular.module('buildingChain')
    .controller('singleContractController', function ($routeParams,$rootScope, $scope, $location,SweetAlert,contractService,buildingService) {
        $scope.data={};
        $scope.init = function () {
            contractService.getOne($routeParams.contractId,function(res,err){
                if(!err){
                    $scope.data = res.data;
                    buildingService.getOne($scope.data[0].building.id,function(res,err){
                        if(!err){
                            $scope.data[0].building.owner = res.data[0].owner;
                            $scope.reloadScripts();
                        }
                    })
                    // 
                }
            })
        }
        $scope.deductAmount = function(d,type){
            if(type ==1){
                d.waterTotalToPay = 0;
            }else if(type ==2){
                d.gasTotalToPay = 0;
            }else if(type ==3){
                d.electricityTotalToPay=0;
            }
            buildingService.update(d,function(res,err){
                if(!err){
                    SweetAlert.swal("Good job!", "The Amount  deducted successfully", "success");
                }else{
                    SweetAlert.swal("Error", "an error occuers", "error");
                }
            })
        }
        $scope.approve=function(d){
            d[0].approvedByGovernment=1;
            contractService.update(d[0],function(res,err){
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
            var script = document.createElement('script');

            script.src = "js/map/initMap.js";

            document.head.appendChild(script);
        }

        $scope.init();
    })