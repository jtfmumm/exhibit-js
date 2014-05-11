define(['test/tmp/test'], function(colors) {
  describe('Test.js', function () {

    describe('colors', function () {
      it('should have a white value of 1', function () {
        expect(colors.white).toEqual(1);
      });
    });

  });
});