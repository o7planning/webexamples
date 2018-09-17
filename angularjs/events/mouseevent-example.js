var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {


    $scope.overCount = 0;
    $scope.enterCount = 0;
    $scope.moveCount = 0;
    $scope.leaveCount = 0;

    $scope.mouseoverHandler = function($event) {
        $scope.overCount += 1;
    }

    $scope.mouseenterHandler = function($event) {
        $scope.enterCount += 1;
    }

    $scope.mousemoveHandler = function($event) {
        $scope.moveCount += 1;
    }

    $scope.mouseleaveHandler = function($event) {
        $scope.leaveCount += 1;
    }
});
