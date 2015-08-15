'use strict';

it('should load main page', function() {
  return browser
    .url('/')
    .waitForVisible('#todoapp')
    .getTitle()
      .should.eventually.match(/Hello World/);
});

it('should add new todo', function() {
  return browser
    .url('/')
    .waitThenClick('#new-todo')
    .keys('blabla')
    .keys('Enter')
    .waitForVisible('input.edit')
      .should.eventually.be.ok;
});

it('should show active todos after click', function() {
  return browser
    .url('/')
    .waitThenClick('a[ui-sref="active"]')
    .waitForVisible('a.selected[ui-sref="active"]')
    .url()
      .should.eventually.have.property('value')
        .that.have.string('#/active');
});
