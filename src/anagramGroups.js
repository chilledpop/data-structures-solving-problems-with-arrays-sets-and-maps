/**
 * Return a grouping of words by whether they are anagrams of each other or not
 * @param {array} words to be grouped
 */
function anagramGroups(words) {
  if (words.length === 0) {
    return [];
  }
  
  const results = new Map();
  
  for(let word of words){
    let letters = word.split("").sort().join("");
    if(results.has(letters)){
      results.get(letters).push(word);
    } else{
      results.set(letters, [word])
    };
   };
   return [...results.values()];
}

module.exports = anagramGroups;
