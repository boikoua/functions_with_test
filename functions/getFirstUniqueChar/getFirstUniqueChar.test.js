const getFirstUniqueChar = require('./getFirstUniqueChar');

describe('Test for getFirstUniqueChar function', () => {
  it('should be a correct return', () => {
    expect(getFirstUniqueChar('aabccdeff')).toBe('b');
    expect(getFirstUniqueChar('AaBcbcDeff')).toBe('d');
  });

  it('should be a correct return if argument have any spaces', () => {
    expect(getFirstUniqueChar('  Swiss')).toBe('w');
  });

  it('should be null if not argument or letter', () => {
    expect(getFirstUniqueChar('aabbcc')).toBeNull();
    expect(getFirstUniqueChar('')).toBeNull();
  });

  it('should be an error if not argument', () => {
    expect(() => {
      getFirstUniqueChar();
    }).toThrow();
  });

  it('should be an error if argument is not a string', () => {
    expect(() => {
      getFirstUniqueChar(777);
    }).toThrow();
  });
});
