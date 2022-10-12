const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  finalString: [],

  getLength() {
    return this.finalString.length
  },

  addLink(value) {
    if(arguments.length === 0) {
      this.finalString.push('( )')
    }
    this.finalString.push(`( ${String(value)} )`)
    return this
  },
  
  removeLink(position) {
   if(position > this.finalString.length - 1 || !position || isNaN(position) || position === undefined || position < 0) {
    this.finalString.length = 0
    throw new Error("You can't remove incorrect link!")
   }
   this.finalString.splice(position-1, 1)
   return this
  }, 
  reverseChain() {
    this.finalString.reverse()
    return this
   },

  finishChain() {
    let str = [...this.finalString].join('~~')
    this.finalString.length = 0   
    return str
}
};

module.exports = {
  chainMaker
};
