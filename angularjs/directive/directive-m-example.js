// Create an Application named "myApp"
var app = angular.module("myApp", []);

// Create a Directvie named "myComment" 
app.directive("myComment", function() {
    return {
        restrict : "M",
        replace : true,
        template : "<h1>OK Important!</h1>"
    };
});
