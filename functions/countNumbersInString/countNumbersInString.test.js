const countNumbersInString = require('./countNumbersInString');

describe('Test for countNumbersInString function', () => {
  it('should be a correct return', () => {
    const str = 'There are 2 apples and 15 bananas.';

    expect(countNumbersInString(str)).toBe(2);
  });

  it('should be a zero if argument without any number', () => {
    const str = 'No numbers here!';

    expect(countNumbersInString(str)).toBe(0);
  });

  it('should be a 2 if argument with not is integer number', () => {
    const str = 'abc -5, 6.0, 7.1';

    expect(countNumbersInString(str)).toBe(2);
  });

  it('should return 2 for text with symbols and numbers', () => {
    expect(countNumbersInString('Room 404: Error 500.')).toBe(2);
  });

  it('should be an error if argument is not string', () => {
    expect(() => {
      countNumbersInString(777);
    }).toThrow();

    expect(() => {
      countNumbersInString(null);
    }).toThrow();

    expect(() => {
      countNumbersInString();
    }).toThrow();
  });
});
