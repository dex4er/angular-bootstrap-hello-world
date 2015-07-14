'use strict';

angular.module('angularBootstrapHelloWorldApp')
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
    url: '/home?back',
    templateUrl: 'scripts/pages/home.html',
    cache: false
  });
});
