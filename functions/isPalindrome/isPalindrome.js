/**
 * Check if string is palindrome.
 *
 * @param {string} str - string
 * @returns {boolean} - a boolean answer
 */

function isPalindrome(str) {
  if (!str) return true;

  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  const prepareStr = str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/gi, '');

  const reverseStr = prepareStr.toLowerCase().split('').reverse().join('');

  return prepareStr === reverseStr;
}

module.exports = isPalindrome;
