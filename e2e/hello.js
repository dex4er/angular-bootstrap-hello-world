'use strict';

it('should load main page', function() {
  return browser
    .url('/')
    .getTitle()
      .should.eventually.match(/Hello World/);
});

it('should add new todo', function() {
  var ENTER_KEY = '\uE006';

  return browser
    .url('/')
    .click('#new-todo')
    .keys('blabla' + ENTER_KEY)
    .isExisting('input.edit')
      .should.eventually.be.ok;
});

it('should show active todos after click', function() {
  return browser
    .url('/')
    .click('a[ui-sref="active"]')
    .url()
      .should.eventually.have.property('value')
        .that.have.string('#/active');
});
