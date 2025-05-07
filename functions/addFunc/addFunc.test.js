const addFunc = require('./addFunc');

describe('Test for addFunc function', () => {
  test('should return correct sum of two numbers', () => {
    expect(addFunc(3, 5)).toBe(8);
  });

  test('should throw an error if one of arguments is not a number', () => {
    expect(() => {
      addFunc('2', 4);
    }).toThrow();
  });

  test(`should throw an error if one of arguments is NaN`, () => {
    expect(() => {
      addFunc(10, NaN);
    }).toThrow();
  });

  test(`should be correct if one of arguments is not`, () => {
    expect(addFunc(10)).toBe(10);
  });

  test(`should be zero without any arguments`, () => {
    expect(addFunc()).toBe(0);
  });
});
