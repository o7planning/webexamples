// Create an Application named "myApp"
var app = angular.module("myApp", []);


var ctrl = app.controller("myCtrl", function($scope) {

     $scope.firstName = "Donald";
     $scope.lastName = "Trump";

     $scope.people = [
         {firstName: 'Donald', lastName: 'Trump'},
         {firstName: 'Ivanka', lastName: 'Trump'}
     ];

});

// Create a Directive named "personProfile"
// E: Element <person-profile>
app.directive("personProfile", function() {
    return {
        restrict : "E",
        templateUrl : "person-profile-template.html",
        scope : {
          firstName: 'test',
          lastName: 'test2'
        }
    };
});
