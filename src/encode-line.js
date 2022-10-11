const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length <= 0) {
    return ''
  } else {
      let currentsymbol = str[0]
    let count = 1
    let result = ''
  
  for (let i = 1; i < str.length; i++){
    let symbolStr = str[i] 
      if(symbolStr === currentsymbol) {
        count++
      } else {
      result += count + currentsymbol
      count = 1
      currentsymbol = symbolStr
    }
  }
  result += count + currentsymbol
  
    return result.replaceAll('1','') 
  }  
}

module.exports = {
  encodeLine
};
