// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:
// Input: s = "IceCreAm"
// Output: "AceCreIm"

// Explanation:
// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

// Constraints:
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

export function reverseVowels(s: string): string {
  // Convert string to array for easier manipulation
  const chars = s.split("");

  // Define vowels (both lower and upper case)
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Find positions of all vowels
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    // Move left pointer until we find a vowel
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }

    // Move right pointer until we find a vowel
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }

    // Swap vowels if we found them
    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }

  // Convert back to string
  return chars.join("");
}
