'use strict';

angular.module('angularBootstrapHelloWorldApp')
.controller('HomeController', function($log, $state, $stateParams, greeting) {
  var ctrl = this;

  $log.debug('HomeController');

  ctrl.greeting = greeting;

  if (! $stateParams.back) {
    greeting.name = null;
  }

  ctrl.submit = function() {
    $log.debug('HomeController.submit');

    if (ctrl.form.$valid) {
      $state.go('greeting');
    }
  };
});
