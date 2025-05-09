const reverseWords = require('./reverseWords');

describe('Test for reverseWords function', () => {
  it('should be a correct return', () => {
    expect(reverseWords('Hello World')).toBe('olleH dlroW');
    expect(reverseWords('      hello   world')).toBe('olleh dlrow');
  });

  it('should be an error if argument is not a string', () => {
    expect(() => {
      reverseWords(777);
    }).toThrow();

    expect(() => {
      reverseWords(null);
    }).toThrow();

    expect(() => {
      reverseWords();
    }).toThrow();
  });

  it('should be an error if argument include only spaces', () => {
    expect(() => reverseWords('      ')).toThrow();
  });
});
