const getResult = require('../index');
const expect = require('chai').expect;


describe('getResult', () => {
  describe('функция getResult', () => {
    [
      [['power','keystrokes','click','click','power','click','click'], 1],
      [['power','keystrokes','click','click','click'], 1],
	  [['click','click',], 0],
      [['click','click','click','power','click','click','keystrokes','click'], 0],
      [['power','keystrokes','click','click','click','power','click','click','power','keystrokes','click','click','click'], 2],
	  [['power','keystrokes','click','click','keystrokes','click','click','click'], 1],
	  [['click','click','power','click','click','keystrokes','click','click','keystrokes','click','click','click'], 1],

    ].forEach(([a, b]) => {
      it(`"${JSON.stringify(a)}" -> ${b}`, () => {
      expect(getResult(a)).to.equal(b);
    });
    })
  });
});