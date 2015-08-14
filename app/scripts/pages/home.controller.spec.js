'use strict';

describe('HomeController', function() {
  var $controller;
  var $state;
  var vm;

  // controller's module
  beforeEach(module('angularBootstrapHelloWorldApp'));

  // mock $state
  beforeEach(module(function($provide) {
    $provide.value('$state', {
      go: function(state) {
        this.current = {name: state};
      }
    });
  }));
  
  beforeEach(inject(function(_$controller_, _$state_) {
    // get controller's instance
    $controller = _$controller_;
    vm = $controller('HomeController');
    // inject mocked $state
    $state = _$state_;
  }));

  it('should be initialized', function() {
    expect(vm.greeting.name).to.be.null;
  });

  it('should be reinitialized after reload', function() {
    expect(vm.greeting.name).to.be.null;
    vm.greeting.name = 'Foo';
    vm = $controller('HomeController');
    expect(vm.greeting.name).to.be.null;
  });

  it('should be preserved after reload when back', function() {
    expect(vm.greeting.name).to.be.null;
    vm.greeting.name = 'Foo';
    vm = $controller('HomeController', {$stateParams:{back: true}});
    vm.greeting.name.should.equal('Foo');
  });

  it('should go forward after submit', function() {
    vm.form = {$valid: true};
    vm.submit();
    $state.current.name.should.be.equal('greeting');
  });
});
