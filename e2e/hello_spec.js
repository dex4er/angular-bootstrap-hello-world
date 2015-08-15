'use strict';

var webdriver = require('selenium-webdriver');

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
    .waitForVisible('#new-todo')
    .click('#new-todo')
    .keys('blabla' + webdriver.Key.ENTER)
    .waitForVisible('input.edit')
      .should.eventually.be.ok;
});

it('should show active todos after click', function() {
  return browser
    .url('/')
    .waitForVisible('a[ui-sref="active"]')
    .click('a[ui-sref="active"]')
    .waitForVisible('a.selected[ui-sref="active"]')
    .url()
      .should.eventually.have.property('value')
        .that.have.string('#/active');
});
