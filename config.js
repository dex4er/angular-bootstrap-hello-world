'use strict';

var proxy = {
    dev: {
      target: 'http://localhost:8000/',
      hostRewrite: 'localhost:8000',
      changeOrigin: true
    },
    prod: {
      target: 'http://example.com/',
      hostRewrite: 'example.com',
      changeOrigin: true
    }
};

module.exports = {

  paths: {
    src: 'src',
    dest: 'www',
    tmp: 'tmp',
    e2e: 'e2e',
    bower: 'src/vendor',
    scripts: 'src/app',
    styles: 'src/styles',
    gulp: 'gulp'
  },

  browser: 'default',

  server: {
    log: false,
//    prefix: '/subdir/',
//    proxy: {
//      '/api/': proxy.dev,
//    }
  },

};
