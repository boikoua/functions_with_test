const getUniqueValues = require('./getUniqueValues');

describe('Test for getUniqueValues function', () => {
  it('should be correct return', () => {
    expect(getUniqueValues([1, 2, 3, 1, 2])).toEqual([1, 2, 3]);
  });

  it('should be an error if arg is not an array', () => {
    expect(() => {
      getUniqueValues('sdf');
    }).toThrow();
  });

  it('should be an empty array if not arg', () => {
    expect(getUniqueValues()).toEqual([]);
  });

  it('should be an error if arg include links types', () => {
    expect(() => {
      getUniqueValues([1, 2, 3, 2, [1, 2]]);
    }).toThrow();
  });
});
