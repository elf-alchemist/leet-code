
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
 * @param {number} num
 * @return {boolean}
 */
function isPalindrome(num) {
  if ( num < 0 ) return false;
  const str = String(num);

  for (let index = 0; index < str.length; index++) {
    if ( str.at(index) !== str.at(-(index + 1)) ) return false;
  }

  return true;
}

strictEqual(isPalindrome(121), true);
strictEqual(isPalindrome(-121), false);
strictEqual(isPalindrome(10), false);
