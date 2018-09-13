var app = angular.module("myApp", []);

var ctrl = app.controller("myCtrl", function($scope) {

  $scope.todoDatas = [
    {name: 'Create a custom directive', completed: true},
    {name: 'Learn about restrict', completed: true},
    {name: 'Master scopes', completed: false}
  ];

});

// Create a Directive named "myTodoList"
// E: Element <my-todo-list todo-list="=" title="@">

app.directive("myTodoList", function() {
    return {
        restrict : "E",
        templateUrl : "todo-template.html",

        scope: {
          todoList: '=',
          title: '@'
        }
    };
});
