'use strict';

var gulp = require('gulp');

var selenium = require('selenium-standalone');
var wdio = require('../node_modules/webdriverio/lib/launcher');

gulp.task('e2e', "Run e2e tests", ['serve:src'], function(done) {
  selenium.install({
    logger: function() { }
  }, function (err) {
    if (err) {
      return done(err);
    }
    selenium.start(function(err, child) {
      if (err) {
        return done(err);
      }
      selenium.child = child;
      wdio.init(__dirname + '/../wdio.conf.js', {
        onComplete: done
      });
    });
  });
});
