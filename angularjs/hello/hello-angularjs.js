// Create an Application named "myApp".
var app = angular.module("myApp", []);

// Create a Controller named "myCtrl"
app.controller("myCtrl", function($scope) {

    $scope.operator = "+";

    $scope.variable1 = 30;
    $scope.variable2 = 20;
    $scope.result = 0;

    $scope.setOperatorSum = function() {
        $scope.operator = "+";
    }

    $scope.setOperatorMinus = function() {
        $scope.operator = "-";
    }

    $scope.calculate = function() {
        if ($scope.operator == "+") {
            $scope.result = parseFloat($scope.variable1) + parseFloat($scope.variable2);
        } else if ($scope.operator == "-") {
            $scope.result = parseFloat($scope.variable1) - parseFloat($scope.variable2);
        }
    }

});
