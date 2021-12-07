const toHex = require('../index');
const expect = require('chai').expect;


describe('toHex', () => {
  describe('функция toHex', () => {
    [
      [375, '177'],
      [555, '22b'],
      [42, '2a'],
      [420, '1a4'],
    ].forEach(([a, b]) => {
      it(`"${a}" - ${b}`, () => {
      expect(toHex(a)).to.equal(b);
    });
    })
  });
});