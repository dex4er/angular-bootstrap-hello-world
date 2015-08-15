'use strict';

angular.module('app').config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('all', {
      url: '/',
      controller: 'TodoController',
      templateUrl: 'app/todo.html'
    })
    .state('active', {
      url: '/active',
      controller: 'TodoController',
      templateUrl: 'app/todo.html'
    })
    .state('completed', {
      url: '/completed',
      controller: 'TodoController',
      templateUrl: 'app/todo.html'
    });

  $urlRouterProvider.otherwise('/');
});
