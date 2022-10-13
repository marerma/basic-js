const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0
  for (let i = 0; i < matrix[0].length; i++) {
    let prevEl = matrix[0][i]
    for (let k = 0; k < matrix.length; k++) {
      prevEl === 0? result : result+= matrix[k][i]
      prevEl = matrix[k][i]
    }
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
