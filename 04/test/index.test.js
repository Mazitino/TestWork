const rle = require('../index');
const expect = require('chai').expect;


describe('rle', () => {
  describe('функция rle', () => {
    [
      ['AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD', 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'],
    ].forEach(([a, b]) => {
      it(`"${a}" -> ${b}`, () => {
      expect(rle(a)).to.equal(b);
    });
    })
  });
});