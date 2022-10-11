const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = []
  let ind = arr.reduce((i, el, ind) => {
    if(el == -1) {
      i.push(ind)
    } return i
  },[])
  let sortedA = arr.filter(el => el !== -1).sort((a,b) => a - b)
  for (let i = 0; i < ind.length; i++) {
    sortedA.splice(ind[i], 0, -1)
  }
  return sortedA
}

module.exports = {
  sortByHeight
};
