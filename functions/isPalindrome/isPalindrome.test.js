const isPalindrome = require('./isPalindrome');

describe('Test for isPalindrome function', () => {
  it('should be a correct return', () => {
    expect(isPalindrome('no lemon, no melon')).toBe(true);
  });

  it('should be false', () => {
    expect(isPalindrome('JavaScript')).toBe(false);
  });

  it('should be an error if arg is not a sting', () => {
    expect(() => {
      isPalindrome(777);
    }).toThrow();
  });

  it('should be correct is arg include spaces', () => {
    expect(isPalindrome(' madam     ')).toBe(true);
  });

  it('should be correct if arg include big chars', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });

  it('should be correct if args === empty', () => {
    expect(isPalindrome(' ')).toBe(true);
  });

  it('should be true if is not an arg', () => {
    expect(isPalindrome()).toBe(true);
  });

  it('should be an error if arg is not a string', () => {
    expect(() => {
      isPalindrome(777);
    }).toThrow();
  });
});
