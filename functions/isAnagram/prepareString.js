/**
 *
 * @param {string} str Argument who need prepare to normal view
 * @returns {string} The same string but already prepared
 */

module.exports = function (str) {
  return str
    .replace(/\s/g, '')
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
};
