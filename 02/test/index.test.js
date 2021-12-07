const testFunction = require('../index');
const expect = require('chai').expect;


describe('validParentheses', () => {
  describe('функция validParentheses', () => {
    [
      ['(', false],
      [')', false],
      ['', true],
      ['()', true],
      ['())', false],
      [')(()()(())', false],
    ].forEach(([a, b]) => {
      it(`"${a}" - ${b?'false':'true'}`, () => {
      expect(testFunction(a)).to.equal(b);
    });
    })
  });
});