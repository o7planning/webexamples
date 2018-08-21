// Create a Application named "myApp".
var app = angular.module("myApp", []);

// Create a Controller named "myCtrl"
app.controller("myCtrl", function($scope) {

    $scope.operation = "+";

    $scope.variable1 = 30;
    $scope.variable2 = 20;
    $scope.result = 0;

    $scope.setOperationSum = function() {
        $scope.operation = "+";
    }

    $scope.setOperationMinus = function() {
        $scope.operation = "-";
    }

    $scope.calculate = function() {
        if ($scope.operation == "+") {
            $scope.result = parseFloat($scope.variable1) + parseFloat($scope.variable2);
        } else if ($scope.operation == "-") {
            $scope.result = parseFloat($scope.variable1) - parseFloat($scope.variable2);
        }
    }

});
