/**
 * This function should return word who include most unique letters
 *
 * @param {string} str String argument
 * @returns {string} Return word with uniq letters
 */

function wordWithMostUniqueLetters(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  if (!str.trim()) {
    throw new Error('Argument is empty');
  }

  const prepareString = str
    .trim()
    .split(' ')
    .map((word) => word.replace(/[^a-zA-Z]/g, ''));

  const resObj = {};

  for (let i = 0; i < prepareString.length; i++) {
    const word = prepareString[i];

    if (resObj.hasOwnProperty(word)) {
      resObj[word].count++;
    } else {
      resObj[word] = {
        value: word,
        unique: new Set(word.split('')).size,
        count: 1,
        ind: i,
      };
    }
  }

  let res = null;

  for (const word in resObj) {
    if (!res) {
      res = resObj[word];
    }

    if (
      res.unique < resObj[word].unique ||
      (res.unique === resObj[word].unique && res.ind > resObj[word].ind)
    ) {
      res = resObj[word];
    }
  }

  return res.value;
}

module.exports = wordWithMostUniqueLetters;
