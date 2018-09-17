var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {

    $scope.department =  {
        id : 1,
        name: "Sales",

        employees : [
            {id: 1, fullName: "Tom", gender: "Male"},
            {id: 2, fullName: "Jerry", gender: "Male"}
        ]
    };
});
