var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {


    $scope.mousedownCount = 0;
    $scope.mouseupCount = 0;
    $scope.clickCount = 0;

    $scope.mousedownHandler = function($event) {
        $scope.mousedownCount += 1;
    }

    $scope.mouseupHandler = function($event) {
        $scope.mouseupCount += 1;
    }

    $scope.clickHandler = function($event) {
        $scope.clickCount += 1;
    }
});
