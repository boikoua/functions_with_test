const hasUniqueChars = require('./hasUniqueChars');

describe('Test for hasUniqueChars function', () => {
  it('should be true', () => {
    expect(hasUniqueChars('abcde')).toBe(true);
  });

  it('should be true with different case', () => {
    expect(hasUniqueChars('AaBbCc')).toBe(true);
  });

  it('should be true if include one space', () => {
    expect(hasUniqueChars('Aa BbCc')).toBe(true);
  });

  it('should be false if include two spaces', () => {
    expect(hasUniqueChars('Aa Bb Cc')).toBe(false);
  });

  it('should be false', () => {
    expect(hasUniqueChars('aa')).toBe(false);
  });

  it('should be an error if argument is not a string', () => {
    expect(() => {
      hasUniqueChars(777);
    }).toThrow();

    expect(() => {
      hasUniqueChars(null);
    }).toThrow();

    expect(() => {
      hasUniqueChars();
    }).toThrow();
  });
});
