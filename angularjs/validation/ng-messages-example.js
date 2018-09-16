// Import ngMessages module to your App.
var app = angular.module("myApp", ["ngMessages"] );

app.controller("myCtrl", function($scope) {

    $scope.password = "";

    $scope.checkOnSubmit = function(event) {
        if ($scope.myForm.$error) {
            alert("Something invalid!");
            // Cancel submit
            event.preventDefault();
            return false;
        }
        alert("All valid => Submit now!");
        return true;
    }

});
