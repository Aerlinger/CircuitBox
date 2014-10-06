'use strict';

//require.config({
//  deps: ['main'],
//  paths: {
//    jquery: '../bower_components/jquery/jquery',
//    bootstrap: 'vendor/bootstrap'
//  },
//  shim: {
//    bootstrap: {
//      deps: ['jquery'],
//      exports: 'jquery'
//    }
//  }
//});

require.config({
//  baseUrl: 'scripts',
  deps: ["main"],
  paths: {
    'jquery': '../../bower_components/jquery/dist/jquery',
    'dat': '../../bower_components/dat-gui/build/dat.gui',
    'Sketch': '../../bower_components/sketch.js/js/sketch'
  },
  shim: {
    'jquery': {
      deps: [],
      exports: '$'
    },
    'dat': {
      deps: [],
      exports: 'dat'
    },
    'Sketch': {
      deps: [],
      exports: 'Sketch'
    }
  }
});
