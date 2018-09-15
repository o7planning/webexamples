var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.pinCode = "";

    // Show more error infos.
    function printErrorInfo() {
        console.log($scope.myForm.$error);
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
