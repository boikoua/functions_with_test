/**
 * Return an array with only unique values.
 *
 * @param {Array<*>} arr - Array of primitive values
 * @returns {Array<*>} Array with unique primitive values
 */

function getUniqueValues(arr = []) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument should be an array');
  }

  for (const el of arr) {
    if (typeof el === 'object' || typeof el === 'function') {
      throw new Error('Argument should be include only primitive values');
    }
  }

  const res = Array.from(new Set([...arr]));

  return res;
}

module.exports = getUniqueValues;
