// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  // Handle edge cases
  if (n === 0) return true;
  if (flowerbed.length === 0) return n === 0;

  // Create a copy to avoid modifying the input array
  const bed = [...flowerbed];
  let plantedCount = 0;

  // Iterate through the flowerbed
  for (let i = 0; i < bed.length; i++) {
    // Check if current position is plantable
    if (
      bed[i] === 0 &&
      (i === 0 || bed[i - 1] === 0) &&
      (i === bed.length - 1 || bed[i + 1] === 0)
    ) {
      // Plant a flower
      bed[i] = 1;
      plantedCount++;

      // If we've planted enough flowers, return true
      if (plantedCount === n) {
        return true;
      }
    }
  }

  // Return whether we managed to plant all required flowers
  return plantedCount >= n;
}
