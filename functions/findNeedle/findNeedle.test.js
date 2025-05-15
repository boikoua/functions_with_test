const findNeedle = require('./findNeedle');

describe('Test for findNeedle function', () => {
  it('should be a true', () => {
    const call = findNeedle([
      '3',
      '123124234',
      undefined,
      'needle',
      'world',
      'hay',
      2,
      '3',
      true,
      false,
    ]);

    expect(call).toBe('found the needle at position 3');
  });

  it('should be a false', () => {
    const call = findNeedle([
      'hay',
      'junk',
      'hay',
      'hay',
      'moreJunk',
      'randomJunk',
    ]);

    expect(call).toBe('not found the needle in the array');
  });

  it('should be an error if argument is not an array', () => {
    expect(() => {
      findNeedle();
    }).toThrow();

    expect(() => {
      findNeedle(null);
    }).toThrow();

    expect(() => {
      findNeedle('needle');
    }).toThrow();
  });
});
