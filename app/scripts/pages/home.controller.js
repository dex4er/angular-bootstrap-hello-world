'use strict';

angular.module('angularBootstrapHelloWorldApp')
.controller('HomeController', function($log, $state, $stateParams, greeting) {
  var vm = this;

  $log.debug('HomeController');

  vm.greeting = greeting;

  if (! $stateParams.back) {
    greeting.name = null;
  }

  vm.submit = function() {
    $log.debug('HomeController.submit');

    if (vm.form.$valid) {
      $state.go('greeting');
    }
  };
});
