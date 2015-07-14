'use strict';

angular.module('angularBootstrapHelloWorldApp')
.controller('GreetingController', function($log, $state, greeting) {
  $log.debug('GreetingController');

  var vm = this;

  vm.greeting = greeting;

  vm.submit = function() {
    $log.debug('GreetingController.submit');
    $state.go('home');
  };
});
