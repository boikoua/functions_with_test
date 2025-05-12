const wordWithMostUniqueLetters = require('./wordWithMostUniqueLetters');

describe('This test for wordWithMostUniqueLetters function', () => {
  it('should be a correct return', () => {
    const res = wordWithMostUniqueLetters('apple banana kiwi');

    expect(res).toBe('apple');
  });

  it('should ignore case in words', () => {
    const res = wordWithMostUniqueLetters('This is a test Sentence sentence');

    expect(res).toBe('Sentence');
  });

  it('should ignore any symbols', () => {
    const res = wordWithMostUniqueLetters('This, is a flower! ');

    expect(res).toBe('flower');
  });

  it('should be an error in argument is not a string', () => {
    expect(() => {
      wordWithMostUniqueLetters(777);
      wordWithMostUniqueLetters(null);
    }).toThrow();
  });

  it('should be an error if argument is empty', () => {
    expect(() => {
      wordWithMostUniqueLetters();
    }).toThrow();

    expect(() => {
      wordWithMostUniqueLetters('     ');
    }).toThrow();
  });
});
