'use strict';

angular.module('angularBootstrapHelloWorldApp')
.directive('itemInput', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      label: '@',
    },
    templateUrl: 'scripts/directives/item-input.html',
  };
});
