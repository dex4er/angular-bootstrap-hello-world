'use strict';

angular.module('angularBootstrapHelloWorldApp')
.controller('GreetingController', function($log, $state, greeting) {
  $log.debug('GreetingController');

  var ctrl = this;

  ctrl.greeting = greeting;

  ctrl.submit = function() {
    $log.debug('GreetingController.submit');
    $state.go('home');
  };
});
