
//
// LeetCode challenge: 9 - Yet unsolved
//

// Given an integer `x`, return true if `x` is a palindrome, and false otherwise.

// Example 1:
//   Input:       x = 121
//   Output:      true
//   Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
//   Input:       x = -121
//   Output:      false
//   Explanation: From left to right, it reads -121.
//                From right to left, it becomes 121-.
//                Therefore it is not a palindrome.

// Example 3:
//   Input:       x = 10
//   Output:      false
//   Explanation: Reads 01 from right to left.Therefore it is not a palindrome.

// Constraints:
// -2^31 <= x <= 2^31 - 1

import { strictEqual } from 'node:assert';

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  return false;
}

strictEqual(isPalindrome(121), true);
strictEqual(isPalindrome(-121), false);
strictEqual(isPalindrome(10), false);
