var employeeApp = angular.module("EmployeeApp",[]);
  employeeApp.controller("empCtrl",function($scope, $http){
    $scope.query = {}
    $scope.queryBy = '$'
    $http.get("http://localhost:3000/tasks.json")
    .then(function (response) {$scope.employees = response.data;});
    $scope.orderProp="name";                
  });



