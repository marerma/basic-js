const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const k = 0.693 / HALF_LIFE_PERIOD
  let time
  
  if(typeof sampleActivity !== 'string' || isNaN(sampleActivity)|| sampleActivity <= 0 || sampleActivity === null || sampleActivity === undefined || sampleActivity > MODERN_ACTIVITY) {
    return false
  }
 else {
   time = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/ k)
 } 
 return time  
   }
    


module.exports = {
  dateSample
};
