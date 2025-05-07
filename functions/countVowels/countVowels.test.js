const countVowels = require('./countVowels');

describe('Test for countVowels function', () => {
  it('should be a correct return', () => {
    expect(countVowels('Hello')).toBe(2);
  });

  it('should be 0 vowels', () => {
    expect(countVowels('why')).toBe(0);
  });

  it('should be correct with Upper Case Letters', () => {
    expect(countVowels('AEIOU')).toBe(5);
  });

  it('should be 0 if argument is empty string', () => {
    expect(countVowels('')).toBe(0);
    expect(countVowels()).toBe(0);
  });

  it('should be an error if argument is not string', () => {
    expect(() => {
      countVowels(777);
    }).toThrow();
  });
});
