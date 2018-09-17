var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.anArray = [1,2,3,4,5,6,7,8,9];
    $scope.aString = "ABCDEFGHIJK";
    $scope.aNumber = 12345678;

    $scope.arrayLimit = 3;
    $scope.stringLimit = 3;
    $scope.numberLimit = 3;

});
