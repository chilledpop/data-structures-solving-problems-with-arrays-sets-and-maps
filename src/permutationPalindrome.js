/**
 * Return true if some permutation of this word is a palindrome
 * @param {string} word The word to check
 */
function permutationPalindrome(word) {
  const charSet = new Set();
  
  word.split('').forEach((char) => {
    if (charSet.has(char)) {
      charSet.delete(char);
    } else {
      charSet.add(char);
    }
  });
  
  return charSet.size <= 1;
  
}

module.exports = permutationPalindrome;
