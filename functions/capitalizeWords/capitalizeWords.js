/**
 * Return capitalize every word.
 *
 * @param {string} str - Argument with words
 * @returns {string} - Complete string with all capitalize words
 */

function capitalizeWords(str = '') {
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  if (!str.trim()) return str;

  const arr = str.toLowerCase().trim().split(/\s+/);

  const result = arr
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

  return result;
}

module.exports = capitalizeWords;
