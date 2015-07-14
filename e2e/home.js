'use strict';

describe('/', function() {
  it('should load main page', function() {
    return browser
      .url('/')
      .pause(2000)
      .getText('h1.title').should.eventually.contains('Hello World');
  });
});
