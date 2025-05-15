const removeEveryOther = require('./removeEveryOther');

describe('Test for removeEveryOther function', () => {
  it('should be a correct answer', () => {
    const call = removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);

    expect(call).toEqual(['Hello', 'Hello Again']);
  });

  it('should be an empty array', () => {
    expect([]).toEqual([]);
  });

  it('should be an error if argument is not an array', () => {
    expect(() => {
      removeEveryOther();
    }).toThrow();

    expect(() => {
      removeEveryOther(null);
    }).toThrow();

    expect(() => {
      removeEveryOther('hello');
    }).toThrow();
  });
});
