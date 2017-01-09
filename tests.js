(function() {
  'use strict';
  var getPrimes=require("../app/app.js").getPrimes;
  describe('returns a list of prime numbers depending on the input value', function () {

    describe('returns a list of prime numbers up to the input', function () {

      it('should return [2, 3, 5] for an input of 5', function () {
        expect(getPrimes(5)).toEqual([2, 3, 5]);
      });

      it('should return [2, 3, 5, 7, 11, 13] for an input of 13', function () {
        expect(getPrimes(13)).toEqual([2, 3, 5, 7, 11, 13]);
      });      

      it('should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47] for an input of 47', function () {
        expect(getPrimes(50)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
      });

    });


    describe('edge case testing', function () {

      it('should return 2 as first number for any input value', function () {
        expect(getPrimes(40)[0]).toEqual(2);
      });

      it('should contain 101 for an input of 101', function () {
        expect(getPrimes(101)).toContain(101);
      });

    });


    describe('should return an empty array for the following cases:', function () {

      it('should return an empty array for an input below 2', function () {
        expect(getPrimes(1)).toEqual([]);
      });

      it('should return an empty array for wrong data type', function () {
        expect(getPrimes('r')).toEqual([]);
      });

    });


    describe('should or should not contain some values:', function () {

      it('should not contain 51 for an input of 51', function () {
        expect(getPrimes(51)).not.toContain(51);
      });

      it('should contain 2, 17, 31 for an input of 40', function () {
        expect(getPrimes(40)).toContain(2, 17, 31);
      });

      it('should not contain 63 for an input of 70', function () {
        expect(getPrimes(70)).not.toContain(63);
      });

    });

  });

})();