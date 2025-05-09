/**
 *  This function should counts each symbol in string
 *
 * @param {string} str Argument for a function
 * @returns {object} Result object
 */

function getLetterStats(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  const prepareStr = str.toLowerCase().trim();

  const res = {};

  for (let char of prepareStr) {
    if (char === ' ') continue;

    if (res.hasOwnProperty(char)) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }

  return res;
}

module.exports = getLetterStats;
