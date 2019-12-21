var assert = require('assert');
var strgen = require('./../lib/strgen.js');


describe('Should generate strings', function() {
  describe('it should generate strings from lib', function() {
    it('Str should generate str length of X', function() {
      assert.equal(strgen.str(5).length, 5);
    });
  });
})