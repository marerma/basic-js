const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {

  let objectDefault = {
    separator: '+',
    additionSeparator:'|',
    repeatTimes: 1,
    additionRepeatTimes: 1,
    addition: ''
    }
  
if(obj.addition === null || typeof obj.addition == 'boolean') {
  obj.addition = String(obj.addition)
}

for (let props in objectDefault) {
  if(!obj[props]) {
    obj[props] = objectDefault[props]
    }
  }  
  

let add = (obj.addition + obj.additionSeparator).repeat(obj.additionRepeatTimes)
let finalAdd = add.substr(0, add.lastIndexOf(obj.additionSeparator))
newStr = (str + finalAdd + obj.separator).repeat(obj.repeatTimes)
return newStr.substr(0, newStr.lastIndexOf(obj.separator))
}

module.exports = {
  repeater
};
