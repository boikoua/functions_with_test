const deleteNth = require('./deleteNth');

describe('Test for deleteNth function', () => {
  it('should be a correct return', () => {
    const res = deleteNth([12, 39, 19, 39, 39, 19, 12], 1);

    expect(res).toEqual([12, 39, 19]);
  });

  it('should be an error if first argument is not an array', () => {
    expect(() => {
      deleteNth(777, 2);
    }).toThrow();
  });

  it('should be an error if second argument is not a number', () => {
    expect(() => {
      deleteNth([1, 2, 3], '5');
    }).toThrow();

    expect(() => {
      deleteNth([2, 34, 5]);
    }).toThrow();
  });
});
