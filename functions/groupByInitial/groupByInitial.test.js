const groupByInitial = require('./groupByInitial');

describe('Test for groupByInitial function', () => {
  it('should be a correct return', () => {
    const argument = ['Apple', 'apricot', 'banana', 'Blueberry', 'cherry'];

    const result = {
      a: ['Apple', 'apricot'],
      b: ['banana', 'Blueberry'],
      c: ['cherry'],
    };

    expect(groupByInitial(argument)).toEqual(result);
  });

  it('should be an error if argument is not an array', () => {
    expect(() => groupByInitial(777)).toThrow();
    expect(() => groupByInitial(null)).toThrow();
    expect(() => groupByInitial()).toThrow();
  });

  it('should be an error if min one element is not a string', () => {
    expect(() => {
      groupByInitial(['hello', 777, 'car']);
    }).toThrow();

    expect(() => {
      groupByInitial([]);
    }).toThrow();
  });
});
