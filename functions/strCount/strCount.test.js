const strCount = require('./strCount');

describe('Test for strCount function', () => {
  it('should be a correct return', () => {
    expect(strCount('Hello', 'o')).toBe(1);
    expect(strCount('Hello', 'l')).toBe(2);
  });

  it('should be zero if the first argument is empty', () => {
    expect(strCount('', 'g')).toBe(0);
  });

  it('should be an error if one from arguments is not a string', () => {
    expect(() => {
      strCount(777, 'h');
    }).toThrow();

    expect(() => {
      strCount('hello', 8);
    }).toThrow();
  });

  it('should be an error if second argument is empty', () => {
    expect(() => {
      strCount('hello');
    }).toThrow();
  });

  it('should be an error if second argument is longer than 1 letter', () => {
    expect(() => {
      strCount('hello', 'ro');
    }).toThrow();
  });
});
