/**
 * Find a factorial from number.
 *
 * @param {number} n - Argument number
 * @returns {number} - Complete factorial
 */

function getFactorial(n) {
  if (n === undefined || n === null) {
    throw new Error('Argument is missing');
  }

  if (typeof n !== 'number') {
    throw new Error('Argument is not a number');
  }

  if (n < 0) {
    throw new Error('Argument is a negative number');
  }

  if (!Number.isInteger(n)) {
    throw new Error('Argument is not integer number');
  }

  if (n === 0) return 1;

  let factorial = 1;

  for (let i = n; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
}

module.exports = getFactorial;
