// Create an Application named "myApp"
var app = angular.module("myApp", []);


var ctrl = app.controller("myCtrl", function($scope) {

     $scope.firstName = "Donald";
     $scope.lastName = "Trump";

});

// Create a Directvie named "personProfile"
app.directive("personProfile", function() {
    return {
        restrict : "E",

        templateUrl : "https://rawgit.com/o7planning/webexamples/master/angularjs/directive/person-profile-template.html" 
    };
});
