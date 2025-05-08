const prepareString = require('./prepareString');

/**
 * This function check anagram strings
 *
 * @param {string} str1 First argument
 * @param {string} str2 Second argument
 * @returns {boolean} Boolean value
 */

function isAnagram(str1 = '', str2 = '') {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('2 arguments should have only string type');
  }

  if (!str1.trim() || !str2.trim()) {
    throw new Error('Both arguments must be non-empty strings');
  }

  const prepareStr1 = prepareString(str1);
  const prepareStr2 = prepareString(str2);

  return prepareStr1 === prepareStr2;
}

module.exports = isAnagram;
