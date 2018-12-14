angular.module('buildingChain')
    .controller('createBuildingController', function ($routeParams,$rootScope, $scope, $location,SweetAlert,buildingService) {
        $scope.data={};
        $scope.init = function () {
            // 
            $scope.reloadScripts();
        }
        $scope.addBuilding= function(d){
            d.latitude = document.getElementById('lat').value
            d.longitudes = document.getElementById('long').value
            d.approved = 1
            d.ownerId = $rootScope.getcurrentUser().id
            buildingService.create(d,function(res,err){
                if(!err){
                    SweetAlert.swal("Good job!", "The Building Added successfully", "success");
                    $rootScope.goTopage('/admin/buildings')
                }else{
                    SweetAlert.swal("Error", "an error occuers", "error");
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
            d.approved=1;
            buildingService.update(d,function(res,err){
                if(!err){
                    SweetAlert.swal("Good job!", "The Property Approved successfully", "success");
                }else{
                    SweetAlert.swal("Error", "an error occuers", "error");
                }
            })
        }
        $scope.addingData = function(d){
            d.waterTotalToPay = parseInt(d.waterTotalToPay)+ Math.floor((Math.random() * 100) + 1);
            d.gasTotalToPay = parseInt(d.gasTotalToPay)+Math.floor((Math.random() * 100) + 1);
            d.electricityTotalToPay = parseInt(d.electricityTotalToPay)+Math.floor((Math.random() * 100) + 1);
            buildingService.update(d,function(res,err){
                if(!err){
                    SweetAlert.swal("Good job!", "The data added successfully", "success");
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