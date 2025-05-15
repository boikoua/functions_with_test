/**
 * This function counts all the smiles
 *
 * @param {string[]} arr Array with different smiles
 * @returns {number} Count smiles
 */

function countSmileys(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not an array');
  }

  const checkArray = arr.every((el) => typeof el === 'string');

  if (!checkArray) {
    throw new Error('Argument should include only string arguments');
  }

  const validSmile = /^[:;][-~]?[)D]$/;
  let count = 0;

  for (const smile of arr) {
    if (validSmile.test(smile)) {
      count++;
    }
  }

  return count;
}

module.exports = countSmileys;
