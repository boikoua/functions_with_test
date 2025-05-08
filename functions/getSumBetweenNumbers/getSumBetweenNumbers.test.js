const getSumBetweenNumbers = require('./getSumBetweenNumbers');

describe('Test for getSumBetweenNumbers function', () => {
  it('should be a correct return', () => {
    expect(getSumBetweenNumbers(1, 3)).toBe(6);
    expect(getSumBetweenNumbers(10, 7)).toBe(34);
  });

  it('should be a correct return if arguments the same', () => {
    expect(getSumBetweenNumbers(5, 5)).toBe(5);
  });

  it('should be an error if not one argument', () => {
    expect(() => {
      getSumBetweenNumbers(10);
    }).toThrow();
    expect(() => {
      getSumBetweenNumbers();
    }).toThrow();
  });

  it('should be an error if argument is not integer number', () => {
    expect(() => {
      getSumBetweenNumbers(Math.PI, 10);
    }).toThrow();
    expect(() => {
      getSumBetweenNumbers(5, 7.1);
    }).toThrow();
  });
});
