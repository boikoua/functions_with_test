/**
 * This function should return max N elements in a general array
 *
 * @param {array} arr Array of numbers
 * @param {*} n Max count number argument
 * @returns {array} Return array numbers
 */

function deleteNth(arr, n) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument should be an array');
  }

  if (typeof n !== 'number') {
    throw new Error('Second argument should be a number');
  }

  const res = [];

  for (let num of arr) {
    const length = res.filter((el) => el === num).length;

    if (length < n) {
      res.push(num);
    }
  }

  return res;
}

module.exports = deleteNth;
