/**
 * This function should returns array with only shortest words
 *
 * @param {string} str String argument
 *
 * @returns {array} Array with shortest words
 */

function shortestWords(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  if (!str.trim()) {
    throw new Error('Argument is empty');
  }

  const prepareArray = str
    .trim()
    .split(' ')
    .map((word) => word.replace(/[^a-zA-Z]/g, ''));

  const sortArray = prepareArray.sort(
    (word1, word2) => word1.length - word2.length
  );

  const result = [sortArray[0]];

  for (let i = 1; i < sortArray.length; i++) {
    if (sortArray[i].length === result[0].length) {
      result.push(sortArray[i]);
    } else {
      break;
    }
  }

  return result;
}

module.exports = shortestWords;
