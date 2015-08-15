'use strict';

angular.module('app').directive('todoEscape', function() {
  var ESCAPE_KEY = 27;

  return function(scope, element, attributes) {
    element.bind('keydown', function(event) {
      if (event.keyCode === ESCAPE_KEY) {
        scope.$apply(attributes.todoEscape);
      }
    });
  };
});
