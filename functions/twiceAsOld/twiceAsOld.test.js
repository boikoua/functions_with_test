const twiceAsOld = require('./twiceAsOld');

describe('Test for twiceAsOld function', () => {
  it('should be an correct return', () => {
    expect(twiceAsOld(36, 7)).toBe(22);
    expect(twiceAsOld(55, 30)).toBe(5);
  });

  it('should be a correct return if son have 0 years old', () => {
    expect(twiceAsOld(32, 0)).toBe(32);
  });

  it('should be an error if each of both arguments is not a number', () => {
    expect(() => {
      twiceAsOld('32', 2);
    }).toThrow();

    expect(() => {
      twiceAsOld(32, '5');
    }).toThrow();

    expect(() => {
      twiceAsOld();
    }).toThrow();
  });
});
