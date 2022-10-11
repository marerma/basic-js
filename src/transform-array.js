const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof(Array))) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  let array = [...arr]
  
for(let i = 0; i < arr.length;i++ ){

switch(arr[i]){

case '--discard-next':
  if (i != arr.length-1) {
     array.splice(i+1,1,'--discard-next');
  }  break;
case '--discard-prev':
  if(i != 0) {array.splice(i-1, 1,'--discard-prev')} 
   break;
case '--double-next':
  if(i != arr.length -1) {
  array.splice(i+1,0,array[i+1])}
  break;
case '--double-prev':
  if(i != 0) {array.splice(i-1,0,array[i-1])} 
   break;
}

} 
  return array.filter(el=> el !='--discard-next' && el !='--discard-prev'&& el !='--double-next' && el !='--double-prev');
}

module.exports = {
  transform
};
