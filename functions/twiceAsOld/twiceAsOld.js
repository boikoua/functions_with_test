/**
 * This function count old with son age and father twice age
 *
 * @param {number} dadYearsOld Dad years old
 * @param {number} sonYearsOld Son years old
 * @returns {number} Nearly twice years
 */

function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (typeof dadYearsOld !== 'number' || isNaN(dadYearsOld)) {
    throw new Error('The first argument is not a number');
  }

  if (typeof sonYearsOld !== 'number' || isNaN(sonYearsOld)) {
    throw new Error('The second argument is not a number');
  }

  const twiceSonAge = sonYearsOld * 2;

  return twiceSonAge > dadYearsOld
    ? twiceSonAge - dadYearsOld
    : dadYearsOld - twiceSonAge;
}

module.exports = twiceAsOld;
