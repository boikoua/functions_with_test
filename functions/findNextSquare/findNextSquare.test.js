const findNextSquare = require('./findNextSquare');

describe('Test for findNextSquare function', () => {
  it('should be a correct square', () => {
    expect(findNextSquare(121)).toBe(144);
    expect(findNextSquare(625)).toBe(676);
  });

  it('should be a -1 if n is not perfect square', () => {
    expect(findNextSquare(114)).toBe(-1);
  });

  it('should be an error if argument is not a number', () => {
    expect(() => {
      findNextSquare();
    }).toThrow();

    expect(() => {
      findNextSquare('777');
    }).toThrow();

    expect(() => {
      findNextSquare(null);
    }).toThrow();
  });
});
