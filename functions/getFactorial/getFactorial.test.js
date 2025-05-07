const getFactorial = require('./getFactorial');

describe('Test for getFactorial function', () => {
  it('should be an error if argument is empty', () => {
    expect(() => {
      getFactorial();
    }).toThrow();
  });

  it('should be an error if argument is not a number', () => {
    expect(() => {
      getFactorial('asd');
    }).toThrow();
  });

  it('should be an error if argument is a negative number', () => {
    expect(() => {
      getFactorial(-2);
    }).toThrow();
  });

  it('should be an error if argument is not an integer number', () => {
    expect(() => {
      getFactorial(1.5);
    }).toThrow();
  });

  it('should be a correct return', () => {
    expect(getFactorial(5)).toBe(120);
  });

  it('should be 1 if argument === 0', () => {
    expect(getFactorial(0)).toBe(1);
  });
});
