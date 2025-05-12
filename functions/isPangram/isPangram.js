/**
 * This function checks that argument is pangram
 *
 * @param {string} str String argument
 * @returns {boolean} Return that string is pangram or not
 */

function isPangram(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  if (!str.trim()) {
    throw new Error('Argument is empty');
  }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const prepareStr = str.trim().toLowerCase();

  return Array.from(alphabet).every((letter) => prepareStr.includes(letter));
}

module.exports = isPangram;
