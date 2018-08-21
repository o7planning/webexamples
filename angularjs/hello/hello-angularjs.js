// Create a Application object.
var app = angular.module("myApp", []);

// Create a Controller named "myCtrl"
app.controller("myCtrl", function($scope) {


    $scope.firstName = "Donald";
    $scope.lastName= "Trump";


    $scope.fullName = function()  {
      return $scope.firstName + " " + $scope.lastName;
    }

});
