'use strict';

describe('HomeController', function() {
  var $controller;
  var $state;
  var ctrl;

  beforeEach(module('angularBootstrapHelloWorldApp'));

  beforeEach(module(function($provide) {
    $provide.value('$state', {
      go: function(state) {
        this.current = {name: state};
      }
    });
  }));
  
  beforeEach(inject(function(_$controller_, _$state_) {
    $controller = _$controller_;
    $state = _$state_;
    ctrl = $controller('HomeController');
    ctrl.form = {};
  }));

  it('should be initialized', function() {
    expect(ctrl.greeting.name).to.be.null;
  });

  it('should be reinitialized after reload', function() {
    expect(ctrl.greeting.name).to.be.null;
    ctrl.greeting.name = 'Foo';
    ctrl = $controller('HomeController');
    expect(ctrl.greeting.name).to.be.null;
  });

  it('should be preserved after reload when back', function() {
    expect(ctrl.greeting.name).to.be.null;
    ctrl.greeting.name = 'Foo';
    ctrl = $controller('HomeController', {$stateParams:{back: true}});
    ctrl.greeting.name.should.equal('Foo');
  });

  it('should go forward after submit', function() {
    ctrl.form.$valid = true;
    ctrl.submit();
    $state.current.name.should.be.equal('greeting');
  });
});
