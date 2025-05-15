/**
 * Function that finds the next integral perfect square.
 *
 * @param {number} n Argument for check a perfect square
 * @returns {number} Return number
 */

function findNextSquare(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new Error('Argument should be a number');
  }

  const checkNumber = Math.sqrt(n);

  if (!Number.isInteger(checkNumber)) {
    return -1;
  }

  return Math.pow(checkNumber + 1, 2);
}

module.exports = findNextSquare;
