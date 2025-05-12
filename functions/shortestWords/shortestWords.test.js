const shortestWords = require('./shortestWords');

describe('Test for shortestWords function', () => {
  it('should be a correct return', () => {
    const res = shortestWords('I saw a fox and an owl!');

    expect(res).toEqual(['I', 'a']);
  });

  it('should be an error if argument is not a string', () => {
    expect(() => {
      shortestWords(777);
    }).toThrow();

    expect(() => {
      shortestWords(null);
    }).toThrow();
  });

  it('should be an error is argument is empty', () => {
    expect(() => {
      shortestWords();
    }).toThrow();

    expect(() => {
      shortestWords('     ');
    }).toThrow();
  });
});
