/**
 * Return true if s1 is an anagram of s2
 * @param {string} s1
 * @param {string} s2
 */
function anagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  
  const s1Letters = s1.toLowerCase().split("").sort().join("");
  const s2Letters = s2.toLowerCase().split("").sort().join("");
  
  if (s1Letters === s2Letters) {
    return true;
  }
  
  return false;
}

module.exports = anagram;
