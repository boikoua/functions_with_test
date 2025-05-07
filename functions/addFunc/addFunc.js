/**
 * Returns the sum of two numbers.
 *
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */

function addFunc(a = 0, b = 0) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('One of arguments is not a number');
  }

  if (isNaN(a) || isNaN(b)) {
    throw new Error('One of arguments is NaN');
  }

  return a + b;
}

module.exports = addFunc;
