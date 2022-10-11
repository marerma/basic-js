const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0
  let str = n.toString()
  for (let i = 0; i < str.length; i++) {
    let currentsymbol = str[i]
    let newStr = Number(str.replace(currentsymbol,''))
    if (newStr >= max) {
      max = newStr
    } else max
  }
  return max
}

module.exports = {
  deleteDigit
};
