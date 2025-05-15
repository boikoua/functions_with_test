const countSmileys = require('./countSmileys');

describe('Test for countSmileys function', () => {
  it('should be a correct return', () => {
    const call = countSmileys([':)', ';(', ';}', ':-D']);

    expect(call).toBe(2);
  });

  it('should be a zero if argument is an empty array', () => {
    expect(countSmileys([])).toBe(0);
  });

  it('should be an error is argument is not an array', () => {
    expect(() => {
      countSmileys(777);
    }).toThrow();

    expect(() => {
      countSmileys(null);
    }).toThrow();

    expect(() => {
      countSmileys({});
    }).toThrow();
  });

  it('should be an error if array include not a sting elements', () => {
    expect(() => {
      countSmileys([777, 'qw']);
    }).toThrow();
  });
});
