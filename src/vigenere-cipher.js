const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    direction == false? this.direction = 'reverse' : this.direction = 'direct'
  }

encrypt (str, key) {
 if(arguments.length < 2 || !arguments || str === undefined || key === undefined || key === null || str === null) {
    throw new Error ('Incorrect arguments!')
    }

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = [] 
  key = key.toLowerCase()
  str = str.toLowerCase() 

for (let i = 0; i < str.length; i++) {
  let currentSymbol = str[i]  
  let strInd = alphabet.indexOf(currentSymbol)
  let keyInd = alphabet.indexOf(key[i]) 

  if(i + 1 >= key.length) {
    key = key + key
  } 

  if(alphabet.includes(currentSymbol)) {  
    result.push(alphabet[(strInd + keyInd) % 26])
  } 
  else  {
    result.push(currentSymbol)
    key = key.slice(0, i).concat(currentSymbol).concat(key.slice(i)) 
  }
}

return this.direction === 'direct'? result.join('').toUpperCase() : result.reverse().join('').toUpperCase()
}

decrypt (stringTodecode, key) {
  if(arguments.length < 2 || !arguments || stringTodecode === undefined || key === undefined || key === null || stringTodecode === null) {
    throw new Error ("Incorrect arguments!")
    }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let result = [] 
  let lowStr = stringTodecode.toLowerCase()
  let newKey = key.toLowerCase()
 
for (let i = 0; i < lowStr.length; i++) {
  
  let currentSymbol = lowStr[i]  
  let strInd = alphabet.indexOf(currentSymbol)
  let keyInd = alphabet.indexOf(newKey[i]) 


  if(i + 1 >= newKey.length) {
    newKey = newKey + key
   
  } 

  if(alphabet.includes(currentSymbol)) { 
    result.push(alphabet[Math.abs(strInd - keyInd + 26) % 26])
  } 
  else {
    result.push(currentSymbol)
    newKey = newKey.slice(0, i).concat(currentSymbol).concat(newKey.slice(i)) 
  
  }
}
return this.direction === 'direct'? result.join('').toUpperCase() : result.reverse().join('').toUpperCase()

}
}

module.exports = {
  VigenereCipheringMachine
};
