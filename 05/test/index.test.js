const rleDecode = require('../index');
const expect = require('chai').expect;


describe('rleDecode', () => {
  describe('функция rleDecode', () => {
    [
      ['3abc', 'aaabbbccc'],
      ['3D2a5d2f', 'DDDaadddddff'],
      ['0d0a0v0t0y', ''],
      ['3d332f2a', 'dddffaa'],
      ['abcde', 'abcde'],
      ['a2bcde', 'abbccddee'],
    ].forEach(([a, b]) => {
      it(`"${a}" -> ${b}`, () => {
      expect(rleDecode(a)).to.equal(b);
    });
    })
  });
});