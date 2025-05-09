const getLetterStats = require('./getLetterStats');

describe('Test for getLetterStats function', () => {
  it('should be a correct return', () => {
    const result = { h: 1, e: 1, l: 2, o: 1 };

    expect(getLetterStats('hello')).toEqual(result);
  });

  it('should be a correct return is argument have spaces', () => {
    const result = {
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    };

    expect(getLetterStats('   Hello World  ')).toEqual(result);
  });

  it('should an error if argument is not a string', () => {
    expect(() => getLetterStats(777)).toThrow();
    expect(() => getLetterStats(null)).toThrow();
    expect(() => getLetterStats()).toThrow();
  });

  it('should be an empty object if argument is empty or include only spaces', () => {
    expect(getLetterStats('')).toEqual({});
    expect(getLetterStats('    ')).toEqual({});
  });
});
