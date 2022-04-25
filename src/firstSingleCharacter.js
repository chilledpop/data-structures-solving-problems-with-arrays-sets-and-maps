/**
 * Return the first character in the string that occurs only once.
 * @param {string} word the string to be analysed
 */
function firstSingleCharacter(word) {
  let map = new Map();
  
  for (let i = 0; i < word.length; i++) {
    let char = word.charAt(i);
    if(!map.has(char)) {
      map.set(char, 0);
    }
    map.set(char, map.get(char) + 1 );
  }
  
  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  
  return null;
}

module.exports = firstSingleCharacter;
