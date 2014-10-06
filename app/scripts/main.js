require.config({
  paths: {
    'jquery': '../../bower_components/jquery/dist/jquery',
    'Circuit': 'scripts/Circuit'
  },
  shim: {
    'jquery': {
      deps: [],
      exports: '$'
    }
  }
});

require(['jquery', 'Circuit'], function($, Circuit) {
//  now you can do what you always done with $
//  $('body').remove();
  $("#test").text("jQuery Loaded");
  Circuit();
});
