/**
 *
 * @param {number} a First argument
 * @param {number} b Second argument
 * @returns {number} Sum of between integer numbers
 */

function getSumBetweenNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Argument should be a number');
  }

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Arguments is not integer number');
  }

  let start = Math.min(a, b);
  let finish = Math.max(a, b);

  let sum = 0;

  for (let i = start; i <= finish; i++) {
    sum += i;
  }

  return sum;
}

module.exports = getSumBetweenNumbers;
