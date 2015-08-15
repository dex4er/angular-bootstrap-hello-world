'use strict';

var conf = require('../config');
var error = require('./error');

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var _ = require('lodash');

var bowerFiles = require('main-bower-files');
var browserSync = require('browser-sync');
var mkdirp = require('mkdirp');

var paths = {
  src: {
    css: [
      conf.paths.src + '/**/*.css',
      conf.paths.tmp + '/sass/**/*.css',
      '!' + conf.paths.bower + '/**/*'
    ],
    js: [
      conf.paths.src + '/**/*.js',
      '!' + conf.paths.bower + '/**/*',
      '!' + conf.paths.src + '/**/*.spec.js',
      '!' + conf.paths.src + '/**/*.mock.js'
    ],
    inj: [
      conf.paths.src + '/*.inj.html'
    ],
  },
  dirs: [
    conf.paths.src + '/',
    conf.paths.tmp + '/sass/'
  ],
  dest: conf.paths.tmp + '/html'
};

function runTask(opts, done) {
  gulp.src(paths.src.inj)
    .pipe($.inject(gulp.src(paths.src.css, {read: false}), {ignorePath: paths.dirs, addRootSlash: !opts.isProd}))
    .pipe($.inject(gulp.src(paths.src.js)/*.pipe($.angularFilesort())*/, {ignorePath: paths.dirs, addRootSlash: !opts.isProd}))
    .pipe($.inject(gulp.src(bowerFiles({includeDev: !opts.isProd}), {read: false}), {ignorePath: paths.dirs, addRootSlash: !opts.isProd, name: 'bower'}))
    .pipe($.extReplace('.html', '.inj.html'))
    .on('error', opts.isProd ? error.prod : error.dev)
    .pipe(gulp.dest(paths.dest))
    .on('end', done)
    .pipe($.if(browserSync.active, browserSync.reload({ stream: true })));
}

gulp.task('html:dev', "Inject styles and scripts into HTML (dev mode)", function(done) {
  runTask({isProd: false}, done);
});

gulp.task('html:prod', "Inject styles and scripts into HTML (prod mode)", function(done) {
  runTask({isProd: true}, done);
});

gulp.task('html', ['html:dev']);

gulp.task('watch:html', "Watch for changes in injected HTML", function(done) { // jshint ignore:line
  mkdirp(conf.paths.tmp + '/sass/', {}, function() {
    gulp.watch(_(paths.src).values().flatten().value(), ['html']);
  });
});
