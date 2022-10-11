const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  if (arr instanceof(Array)){
     let newArr = arr.reduce((res, el) => {
    if (typeof el === 'string') {
      res.push(el.replaceAll(' ','').toLocaleLowerCase()[0])
    } 
    return res
  },[])
  let result = newArr.sort((a,b)=> a.localeCompare(b)).join('').toUpperCase()
  return result
 } else return false
 

}

module.exports = {
  createDreamTeam
};
