/**
 * This function checks str include only uniq or not
 *
 * @param {string} str String argument for function
 * @returns {boolean} Return true or false
 */

function hasUniqueChars(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  const uniqCollection = Array.from(new Set([...str]));

  return uniqCollection.length === str.length;
}

module.exports = hasUniqueChars;
