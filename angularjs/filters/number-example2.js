var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $filter) {

    var aNumber = 19001.2345;

    // Use number filter in Javascript:
    $scope.revenueAmountStr = $filter("number")(aNumber, 2);// ==> 19,001.235

});
