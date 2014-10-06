require.config({
  paths: {
    'jquery': '../../bower_components/jquery/dist/jquery',
    'dat': '../../bower_components/dat-gui/build/dat.gui',
    'Sketch': '../../bower_components/sketch.js/js/sketch'
//    'Circuit': '../scripts/Circuit'
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

require(['jquery', 'dat', 'Sketch'], function ($, dat, Sketch) {
  var FizzyText = function () {
    this.message = 'dat.gui';
    this.speed = 0.8;
    this.displayOutline = false;

    this.color0 = "#ffae23"; // CSS string
    this.color1 = [ 0, 128, 255 ]; // RGB array
    this.color2 = [ 0, 128, 255, 0.3 ]; // RGB with alpha
    this.color3 = { h: 350, s: 0.9, v: 0.3 }; // Hue, saturation, value
  };

  window.onload = function () {
    var text = new FizzyText();
    var gui = new dat.GUI({
      load: JSON,
      preset: 'Flow'
    });

    gui.remember(text);

    gui.add(text, 'message');
    var speedControl = gui.add(text, 'speed', -5, 5);
    gui.add(text, 'displayOutline');

    gui.add(text, 'message', [ 'pizza', 'chrome', 'hooray' ]);

    // Choose from named values
    gui.add(text, 'speed', { Stopped: 0, Slow: 0.1, Fast: 5 });

    var f1 = gui.addFolder('Flow Field');
    var f2 = gui.addFolder('Letters');

    f2.open();

    gui.addColor(text, 'color0');
    gui.addColor(text, 'color1');
    gui.addColor(text, 'color2');
    gui.addColor(text, 'color3');

    speedControl.onChange(function (value) {
      // Fires on every change, drag, keypress, etc.
      console.log("Controller change!");
    });

    speedControl.onFinishChange(function (value) {
      console.log("Controller finish change!");
    });

    var update = function () {
      requestAnimationFrame(update);
      text.noiseStrength = Math.random();
    };

    update();
  };

  $("#test").text("jQuery Loaded");

  console.log(Sketch);
});
