const queueTime = require('./queueTime');

describe('Test for queueTime function', () => {
  it('should be a correct return', () => {
    expect(queueTime([1, 2, 3, 4], 1)).toBe(10);
    expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toBe(9);
  });

  it('should be zero if array is empty', () => {
    expect(queueTime([], 1)).toBe(0);
  });

  it('should be an error if array is not', () => {
    expect(() => {
      queueTime(777, 2);
    }).toThrow();
  });

  it('should be an error is array include different types', () => {
    expect(() => {
      queueTime([1, 2, 'str'], 2);
    }).toThrow();
  });

  it('should be an error in not a cashier', () => {
    expect(() => {
      queueTime([1, 2, 3, 4]);
    }).toThrow();

    expect(() => {
      queueTime([1, 2, 3, 4], 'ffj');
    });

    expect(() => {
      queueTime([1, 2, 3], null);
    }).toThrow();
  });
});
