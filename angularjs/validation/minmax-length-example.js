var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.password = "";

    // Show more error infos.
    function printErrorInfo() {
        console.log($scope.myForm.$error);
        if ($scope.myForm.$error.minlength) {
            console.log('$error.minlength? ' + $scope.myForm.$error.minlength[0].$invalid);
        }
        if ($scope.myForm.$error.maxlength) {
            console.log('$error.maxlength? ' + $scope.myForm.$error.maxlength[0].$invalid);
        }
    }

    $scope.checkOnSubmit = function(event) {
        if ($scope.myForm.$invalid) {
            alert("Something invalid!");

            printErrorInfo();

            // Cancel submit
            event.preventDefault();
            return false;
        }
        alert("All valid => Submit now!");
        return true;
    }

});
