var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.field1 = "";

    $scope.doSubmitForm = function(event) {
        alert("OK: " + $scope.myForm.$submitted);
        // Code to Submit form!
    }

});
