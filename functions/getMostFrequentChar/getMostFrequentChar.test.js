const getMostFrequentChar = require('./getMostFrequentChar');

describe('Test for getMostFrequentChar function', () => {
  it('should be null if argument is empty', () => {
    expect(getMostFrequentChar('')).toBe(null);
    expect(getMostFrequentChar('   ')).toBe(null);
    expect(getMostFrequentChar()).toBe(null);
  });

  it('should be a correct return', () => {
    expect(getMostFrequentChar('hello world')).toBe('l');
  });

  it('should be a correct if argument include spaces', () => {
    expect(getMostFrequentChar('   JavaScript  ')).toBe('a');
    expect(getMostFrequentChar('Aa    Aa Dd BB')).toBe('a');
  });

  it('should be an error if argument not a string', () => {
    expect(() => {
      getMostFrequentChar(777);
    }).toThrow();
    expect(() => {
      getMostFrequentChar(NaN);
    }).toThrow();
    expect(() => {
      getMostFrequentChar(null);
    }).toThrow();
  });
});
