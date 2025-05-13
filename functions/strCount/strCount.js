/**
 * This function counts all letters in the string
 *
 * @param {string} str Word, where will count letters
 * @param {string} letter Letter, who will search in the word
 * @returns {number} Return number of count
 */

function strCount(str, letter) {
  if (typeof str !== 'string' || typeof letter !== 'string') {
    throw new Error('Both arguments should be a string');
  }

  if (!letter.trim()) {
    throw new Error('Second argument should be');
  }

  if (letter.trim().length > 1) {
    throw new Error('Second argument should include only one letter');
  }

  let count = 0;

  for (const char of str) {
    if (char === letter) count++;
  }

  return count;
}

module.exports = strCount;
