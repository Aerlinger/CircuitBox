require.config({
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'dat-gui': 'bower_components/dat-gui/build/dat.gui',
    'Circuit': 'scripts/Circuit'
  },
  shim: {
    'jquery': {
      deps: [],
      exports: '$'
    }
  }
});

require(['jquery', 'dat-gui', 'Circuit'], function ($, dat, Circuit) {
  var FizzyText = function () {
    this.message = 'dat.gui';
    this.speed = 0.8;
    this.displayOutline = false;
//            this.explode = function() { ... };
    // Define render logic ...

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
//            gui.add(text, 'explode');

//            gui.add(text, 'noiseStrength').step(5); // Increment amount
//            gui.add(text, 'growthSpeed', -5, 5); // Min and max
//            gui.add(text, 'maxSize').min(0).step(0.25); // Mix and match

    gui.add(text, 'message', [ 'pizza', 'chrome', 'hooray' ]);

    // Choose from named values
    gui.add(text, 'speed', { Stopped: 0, Slow: 0.1, Fast: 5 });

    var f1 = gui.addFolder('Flow Field');
//            f1.add(text, 'speed');
//            f1.add(text, 'noiseStrength');

    var f2 = gui.addFolder('Letters');
//            f2.add(text, 'growthSpeed');
//            f2.add(text, 'maxSize');
//            f2.add(text, 'message');

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
      // Fires when a controller loses focus.
//              alert("The new value is " + value);
      console.log("Controller finish change!");
    });

    gui.add(text, 'noiseStrength', 0, 100).listen();

    var update = function () {
      requestAnimationFrame(update);
      text.noiseStrength = Math.random();
    };

    update();
  };

  $("#test").text("jQuery Loaded");
  Circuit();
});
