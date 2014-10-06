/* global describe, it */

(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        true
      });

      it('runs another test', function() {
        expect(true).to.equal(true);
      });
    });
  });
})();
