/**
 * This function should return the first very often word
 *
 * @param {string} str String argument
 * @returns {string} Return often word
 */

function getMostFrequentWord(str) {
  if (typeof str !== 'string') {
    throw new Error('Argument should be a string');
  }

  if (!str.trim()) {
    throw new Error('Argument include only spaces');
  }

  const prepareString = str.trim().toLowerCase().split(' ');

  const resObj = {};

  for (let i = 0; i < prepareString.length; i++) {
    const word = prepareString[i].replace(/[^a-zA-Z]/g, '');

    if (resObj.hasOwnProperty(word)) {
      resObj[word].count++;
    } else {
      resObj[word] = {
        value: word,
        count: 1,
        index: i,
      };
    }
  }

  let res = null;

  for (const word in resObj) {
    if (!res) {
      res = resObj[word];
    }

    if (
      res.count < resObj[word].count ||
      (res.count === resObj[word].count && res.index > resObj[word].index)
    ) {
      res = resObj[word];
    }
  }

  return res.value;
}

module.exports = getMostFrequentWord;
