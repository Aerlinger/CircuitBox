console.log("Loading app_test");

/* global define, describe, it, should */
define(['app'], function (app) {
  'use strict';

  console.log("defined app");
  describe('app', function () {
    it('should exist', function() {
      should.exist(app);
    });
  });
});
