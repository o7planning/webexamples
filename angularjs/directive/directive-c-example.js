// Create an Application named "myApp"
var app = angular.module("myApp", []);

// Create a Directvie named "errMessage" 
app.directive("errMessage", function() {
    return {
        restrict : "C",
        template : "<h1>Something Error!</h1>"
    };
});
