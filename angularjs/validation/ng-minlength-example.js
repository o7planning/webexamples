var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.password = "";


    $scope.checkOnSubmit = function(event)  {
        if($scope.myForm.$invalid)  {
           alert("Something invalid!");

           console.log( $scope.myForm.$error);
           console.log( $scope.myForm.$error.minlength[0].$invalid);
           // Cancel submit
           event.preventDefault();
           return false;
        }
        alert("All valid => Submit now!");
        return true;
    }

});
