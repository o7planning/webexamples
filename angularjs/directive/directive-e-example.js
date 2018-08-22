// Create an Application named "myApp"
var app = angular.module("myApp", []);

// Create a Directvie named "helloWorld"
app.directive("helloWorld", function() {
    return {
        restrict : "E",
        template : "<h1>Hello World!</h1>"
    };
});
