'use strict';

angular.module('angularBootstrapHelloWorldApp')
.config(function($stateProvider) {
  $stateProvider
  .state('greeting', {
    url: '/greeting',
    templateUrl: 'scripts/pages/greeting.html',
    cache: false
  });
});