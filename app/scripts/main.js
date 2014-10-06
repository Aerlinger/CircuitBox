require(['Circuit' ,'app', 'jquery', 'dat', 'Sketch'], function (Circuit, app, $, dat, Sketch) {
  'use strict';

  console.log(app);
  console.log(Circuit);

  var FizzyText = function () {
    this.message = 'dat.gui';
    this.speed = 0.8;
    this.displayOutline = false;

    this.color0 = '#ffae23'; // CSS string
    this.color1 = [ 0, 128, 255 ]; // RGB array
    this.color2 = [ 0, 128, 255, 0.3 ]; // RGB with alpha
    this.color3 = { h: 350, s: 0.9, v: 0.3 }; // Hue, saturation, value
  };

  window.onload = function () {
    Sketch.create({
      setup: function() {
//        this.r = this.g = this.b = random( 100, 200 );
      },
      mousemove: function() {
        this.r = 255 * ( this.mouse.x / this.width );
        this.g = 255 * ( this.mouse.y / this.height );
//        this.b = 255 * abs( cos( PI * this.mouse.y / this.width ) );
      },
      draw: function() {
//        this.fillStyle = 'rgb(' + ~~this.r + ',' + ~~this.g + ',' + ~~this.b + ')';
        this.fillRect( 0, 0, this.width, this.height );
      }
    });

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

//    var f1 = gui.addFolder('Flow Field');
    var f2 = gui.addFolder('Letters');

    f2.open();

    gui.addColor(text, 'color0');
    gui.addColor(text, 'color1');
    gui.addColor(text, 'color2');
    gui.addColor(text, 'color3');

    speedControl.onChange(function (value) {
      // Fires on every change, drag, keypress, etc.
      console.log('Controller changed: ' + value);
    });

    speedControl.onFinishChange(function (value) {
      console.log('Controller finish change: ' + value);
    });

    var update = function () {
      requestAnimationFrame(update);
      text.noiseStrength = Math.random();
    };

    update();
  };
});
