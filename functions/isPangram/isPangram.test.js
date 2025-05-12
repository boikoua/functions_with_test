const isPangram = require('./isPangram');

describe('Test for isPangram function', () => {
  it('should be true', () => {
    const res = isPangram('The quick brown fox jumps over the lazy dog.');

    expect(res).toBe(true);
  });

  it('should be false', () => {
    const res = isPangram('Hello world!');

    expect(res).toBe(false);
  });

  it('should be an error if argument is not string', () => {
    expect(() => {
      isPangram(777);
    }).toThrow();

    expect(() => {
      isPangram(null);
    }).toThrow();
  });

  it('should be an error if argument is empty', () => {
    expect(() => {
      isPangram();
    }).toThrow();

    expect(() => {
      isPangram('    ');
    }).toThrow();
  });
});
