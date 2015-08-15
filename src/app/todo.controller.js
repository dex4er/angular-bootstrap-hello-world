'use strict';

angular.module('app').controller('TodoController', function($filter, $scope, $state, todoStorage) {
  var vm = $scope.vm = this;

  var todos = vm.todos = todoStorage.get();

  this.newTodo = '';
  this.remainingCount = $filter('filter')(todos, {
    completed : false
  }).length;
  this.editedTodo = null;

  this.filter = $state.current.name;

  vm.statusFilter = {
    'active' : {
      completed : false
    },
    'completed' : {
      completed : true
    }
  }[this.filter];

  $scope.$watch('vm.remainingCount == 0', function(val) {
    vm.allChecked = val;
  });

  this.addTodo = function() {
    var newTodo = vm.newTodo.trim();
    if (newTodo.length === 0) {
      return;
    }

    todos.push({
      title : newTodo,
      completed : false
    });
    todoStorage.put(todos);

    vm.newTodo = '';
    vm.remainingCount++;
  };

  this.editTodo = function(todo) {
    vm.editedTodo = todo;
    // Clone the original todo to restore it on demand.
    vm.originalTodo = angular.extend({}, todo);
  };

  this.doneEditing = function(todo) {
    vm.editedTodo = null;
    todo.title = todo.title.trim();

    if (!todo.title) {
      vm.removeTodo(todo);
    }

    todoStorage.put(todos);
  };

  this.revertEditing = function(todo) {
    todos[todos.indexOf(todo)] = vm.originalTodo;
    vm.doneEditing(vm.originalTodo);
  };

  this.removeTodo = function(todo) {
    vm.remainingCount -= todo.completed ? 0 : 1;
    todos.splice(todos.indexOf(todo), 1);
    todoStorage.put(todos);
  };

  this.todoCompleted = function(todo) {
    vm.remainingCount += todo.completed ? -1 : 1;
    todoStorage.put(todos);
  };

  this.clearCompletedTodos = function() {
    vm.todos = todos = todos.filter(function(val) {
      return !val.completed;
    });
    todoStorage.put(todos);
  };

  this.markAll = function(completed) {
    todos.forEach(function(todo) {
      todo.completed = !completed;
    });
    vm.remainingCount = completed ? todos.length : 0;
    todoStorage.put(todos);
  };
});
