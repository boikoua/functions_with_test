const capitalizeWords = require('./capitalizeWords');

describe('Test for capitalizeWords function', () => {
  it('should be a correct return', () => {
    expect(capitalizeWords('javaScript is FUN')).toBe('Javascript Is Fun');
  });

  it('should be an empty return', () => {
    expect(capitalizeWords()).toBe('');
  });

  it('should be return the same if not any words', () => {
    expect(capitalizeWords('   ')).toBe('   ');
  });

  it('should be an error if argument is not a string', () => {
    expect(() => {
      capitalizeWords(777);
    }).toThrow();
  });

  it('should be the same if arguments is number as string type', () => {
    expect(capitalizeWords('123 777 909')).toBe('123 777 909');
  });
});
