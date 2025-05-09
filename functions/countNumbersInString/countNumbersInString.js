/**
 * This function should return count numbers in the string
 *
 * @param {string} str Argument string with numbers
 * @returns {number} Count numbers in the string
 */

function countNumbersInString(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument is not a string');
  }

  const res = str.split(' ').filter((el) => {
    const num = Number.parseFloat(el);

    if (!Number.isNaN(num) && Number.isInteger(num)) {
      return el;
    }
  }).length;

  return res;
}

module.exports = countNumbersInString;
