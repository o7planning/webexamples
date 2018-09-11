var app = angular.module("myApp", []);

var ctrl = app.controller("myCtrl", function($scope) {

  $scope.todoList = [
    {name: 'Create a custom directive', completed: true},
    {name: 'Learn about restrict', completed: true},
    {name: 'Master scopes', completed: false}
  ];

});

// Create a Directive named "myTodoList"
// E: Element <my-todo-list todo-datas="=" title="@">
app.directive("myTodoList", function() {
    return {
        restrict : "E",
        templateUrl : "todo-template.html",
        // '=' : an expression
        // '@': a string
        scope: {
          todoDatas: '=',
          title: '@'
        }
    };
});
