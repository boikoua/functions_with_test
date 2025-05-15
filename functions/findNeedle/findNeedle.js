/**
 * This function should finds a needle word.
 *
 * @param {array} arr Array with arguments
 * @returns {string} Return string answer
 */

function findNeedle(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument should be an array');
  }

  const index = arr.indexOf('needle');

  if (index >= 0) {
    return `found the needle at position ${index}`;
  } else {
    return 'not found the needle in the array';
  }
}

module.exports = findNeedle;
