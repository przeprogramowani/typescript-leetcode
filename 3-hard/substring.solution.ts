// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all
//concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]

// Output: [0,9]

// Explanation:

// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

// Output: []

// Explanation:

// There is no concatenated substring.

// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

// Output: [6,9,12]

// Explanation:

// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

// Constraints:

// 1 <= s.length <= 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.

export function findSubstring(s: string, words: string[]): number[] {
  // If either string or words array is empty, return empty array
  if (!s.length || !words.length) return [];

  const result: number[] = [];
  const wordLen = words[0].length;
  const totalWords = words.length;
  const totalLen = wordLen * totalWords;

  // If the substring length would be longer than s, return empty array
  if (totalLen > s.length) return [];

  // Create a map of word frequencies from the words array
  const wordFreq = new Map<string, number>();
  for (const word of words) {
    wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
  }

  // Check each possible starting position in s
  for (let i = 0; i <= s.length - totalLen; i++) {
    // Create a map for current window
    const seenWords = new Map<string, number>();
    let validWords = 0;

    // Check each word position in the current window
    for (let j = 0; j < totalWords; j++) {
      const startPos = i + j * wordLen;
      const currentWord = s.slice(startPos, startPos + wordLen);

      // If this word isn't in our target words, break
      if (!wordFreq.has(currentWord)) break;

      // Add to seen words
      seenWords.set(currentWord, (seenWords.get(currentWord) || 0) + 1);

      // If we've seen this word more times than it appears in words array, break
      if (seenWords.get(currentWord)! > wordFreq.get(currentWord)!) break;

      validWords++;
    }

    // If we found all words in correct quantities, this is a valid position
    if (validWords === totalWords) {
      result.push(i);
    }
  }

  return result;
}
