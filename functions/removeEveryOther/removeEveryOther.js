/**
 * This function returns array without each of second element.
 *
 * @param {array} arr Array argument with elements
 * @returns {array} Return correct array
 */

function removeEveryOther(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Argument should be an array');
  }

  return arr.filter((_, index) => {
    if (index % 2 === 0) {
      return true;
    }
  });
}

module.exports = removeEveryOther;
