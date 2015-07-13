'use strict';

angular.module('angularBootstrapHelloWorldApp')
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
    url: '/home?back',
    templateUrl: 'scripts/states/home.html',
    cache: false
  });
});
