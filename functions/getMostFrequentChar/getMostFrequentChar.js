/**
 * This function return one symbol, who was more times
 *
 * @param {string} str Argument with string type
 * @returns {string} One symbol who was more times
 */

function getMostFrequentChar(str = '') {
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  const prepareStr = str.toLowerCase().trim();

  if (!prepareStr) return null;

  const res = {};

  for (const char of prepareStr) {
    if (char !== ' ') {
      if (!res.hasOwnProperty(char)) {
        res[char] = 1;
      } else {
        res[char]++;
      }
    }
  }

  let resValue = 0;
  let resChar = '';

  for (const key in res) {
    if (res[key] > resValue) {
      resValue = res[key];
      resChar = key;
    }
  }

  return resChar;
}

module.exports = getMostFrequentChar;
