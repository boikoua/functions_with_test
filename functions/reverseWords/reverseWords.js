/**
 * This function should returned reverse string
 *
 * @param {string} str  String argument
 * @returns {string} A string with each word reversed
 */

function reverseWords(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  const prepareStr = str.replace(/\s+/g, ' ').trim();

  if (!prepareStr) {
    throw new Error('Argument should have min 1 symbol');
  }

  const res = prepareStr
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');

  return res;
}

module.exports = reverseWords;
