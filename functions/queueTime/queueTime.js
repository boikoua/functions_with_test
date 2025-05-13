/**
 * This function return max time for one cash register
 *
 * @param {number[]} customers Array with time for each of client
 * @param {number} n Count open cashiers
 * @returns {number} Max general time
 */

function queueTime(customers, n) {
  if (!Array.isArray(customers)) {
    throw new Error('Argument should be an array');
  }

  const checkArray = customers.every(
    (time) => typeof time === 'number' && !isNaN(time)
  );

  if (!checkArray) {
    throw new Error('Argument should include only numbers');
  }

  if (!n || typeof n !== 'number' || isNaN(n)) {
    throw new Error('Argument should be a number');
  }

  if (customers.length === 0) return 0;

  const lines = new Array(n).fill(0);

  for (let time of customers) {
    const minIndex = lines.indexOf(Math.min(...lines));
    lines[minIndex] += time;
  }

  return Math.max(...lines);
}

module.exports = queueTime;
