/**
 * This function groups all the words
 *
 * @param {string[]} words Array with string elements
 * @returns {Object<string, string[]>} Result object
 */

function groupByInitial(words) {
  if (!Array.isArray(words)) {
    throw new Error('Argument should be an array');
  }

  const checkArray = words.every((word) => typeof word === 'string');

  if (!checkArray || !words.length) {
    throw new Error('Argument should includes only string elements');
  }

  const res = {};

  for (const word of words) {
    const firstLetter = word[0].toLowerCase();

    if (res.hasOwnProperty(firstLetter)) {
      res[firstLetter].push(word);
    } else {
      res[firstLetter] = [];
      res[firstLetter].push(word);
    }
  }

  return res;
}

module.exports = groupByInitial;
