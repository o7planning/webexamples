// Create an Application named "myApp"
var app = angular.module("myApp", []);

// Create a Directvie named "goodBye"


app.directive("goodBye", function() {
    return {
        restrict : "A",
        template : "<h1>Good Bye!</h1>"
    };
});
