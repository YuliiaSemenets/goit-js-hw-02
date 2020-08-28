function findLongestWord(string = "") {
  let words = string.split(" ");
  let LongestWord = words[0];

  for (const word of words) {
    const isLongest = word.length > LongestWord.length;

    if (isLongest) {
      LongestWord = word;
    }
  }

  return LongestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
