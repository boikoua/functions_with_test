/**
 * Count all vowels letters.
 *
 * @param {string} str - String for argument
 * @returns {number} - Count of vowels letters
 */

function countVowels(str) {
  if (!str) return 0;

  if (typeof str !== 'string') {
    throw new Error('Arguments should be a string');
  }

  let count = 0;
  const prepareStr = str.toLowerCase().trim();

  if (!prepareStr) return 0;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of prepareStr) {
    const isInclude = vowels.includes(char);

    if (isInclude) {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;
