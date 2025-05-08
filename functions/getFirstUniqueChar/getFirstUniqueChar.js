/**
 * This function check the first uniq letter
 *
 * @param {string} str Argument for a function
 * @returns {string|null} Can return letter or null
 */

function getFirstUniqueChar(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument is not a string');
  }

  const prepareStr = str.toLowerCase().trim();

  for (let i = 0; i < prepareStr.length; i++) {
    if (
      !prepareStr.slice(0, i).includes(prepareStr[i]) &&
      !prepareStr.slice(i + 1).includes(prepareStr[i])
    ) {
      return prepareStr[i];
    }
  }

  return null;
}

module.exports = getFirstUniqueChar;
