var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.field1 = "";

    $scope.checkOnSubmit = function(event) {
        alert("OK: " + $scope.myForm.$submitted);

        // $scope.myForm.$submitted = true;
        // Cancel submit
        //event.preventDefault();
        //return false;
        return true;
    }
});
