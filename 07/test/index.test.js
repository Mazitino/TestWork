const rgb = require('../index');
const expect = require('chai').expect;


describe('rgb', () => {
  describe('функция rgb', () => {
    [
      [[0,0,0], '000000'],
      [[0, 0, -20], '000000'],
      [[300,255,255], 'FFFFFF'],
      [[173,255,47], 'ADFF2F'],
      [[221, 34, 12], 'DD220C'],
      [[206, 278, -2], 'CEFF00'],
      [[4, 179, 152], '04B398'],
      [['4', 179, 152], '04B398'],
      [['-2', 179, 152], '00B398'],
      [[[], 154, 45], '009A2D'],
    ].forEach(([a, b]) => {
      it(`"${JSON.stringify(a)}" -> ${b}`, () => {
      expect(rgb(...a)).to.equal(b);
    });
    })
  });
});