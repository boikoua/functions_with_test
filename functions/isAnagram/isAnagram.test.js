const isAnagram = require('./isAnagram');

describe('Test for isAnagram function', () => {
  it('should be true', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('Debit Card', 'Bad Credit')).toBe(true);
  });

  it('should be true if argument have spaces', () => {
    expect(isAnagram('    listen', 'silent   ')).toBe(true);
  });

  it('should be false', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
  });

  it('should be an error if argument is not a string', () => {
    expect(() => {
      isAnagram(777, null);
    }).toThrow();
  });

  it('should be an error if is not any argument', () => {
    expect(() => {
      isAnagram('');
    }).toThrow();
    expect(() => {
      isAnagram('     ');
    }).toThrow();
    expect(() => {
      isAnagram();
    }).toThrow();
  });
});
