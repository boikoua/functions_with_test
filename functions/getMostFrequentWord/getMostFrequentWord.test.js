const getMostFrequentWord = require('./getMostFrequentWord');

describe('Test for getMostFrequentWord function', () => {
  it('should be a correct return', () => {
    const res = getMostFrequentWord(
      'Hello, hello world! This is a hello world test.'
    );

    expect(res).toBe('hello');
  });

  it('should return the first word if both have a count the same', () => {
    const res = getMostFrequentWord('No repetition here');

    expect(res).toBe('no');
  });

  it('should be an error if only spaces', () => {
    expect(() => {
      getMostFrequentWord('     ');
    }).toThrow();
  });

  it('should be an error if not argument', () => {
    expect(() => {
      getMostFrequentWord();
    }).toThrow();
  });

  it('should be an error if argument is not a string', () => {
    expect(() => {
      getMostFrequentWord(777);
    }).toThrow();

    expect(() => {
      getMostFrequentWord(null);
    }).toThrow();
  });
});
