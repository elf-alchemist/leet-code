
//
// LeetCode challenge: 217 - Solved.
//

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
//   Input:  nums = [1, 2, 3, 1];
//   Output: true

// Example 2:
//   Input:  nums = [1, 2, 3, 4];
//   Output: false

// Example 3:
//   Input:  nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
//   Output: true;

// Constraints:
//   `1 <= nums.length <= 10^5`
//   `-10^9 <= nums[i] <= 10^9`
import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

/**
 * @param {Array<number>} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  for (let outerIndex = 0; outerIndex < nums.length; outerIndex++) {
    for (let innerIndex = outerIndex + 1; innerIndex < nums.length; innerIndex++) {
      if (nums[outerIndex] === nums[innerIndex]) return true;
    }
  }
  return false;
}

describe('LeetCode - 217', { timeout: 1_000 }, () => {
  test('Case 1', () => {

    const firstInput = [1, 2, 3, 1];

    strictEqual(containsDuplicate(firstInput), true);

  });
  test('Case 2', () => {

    const secondInput = [1, 2, 3, 4];

    strictEqual(containsDuplicate(secondInput), false);

  });
  test('Case 3', () => {

    const thirdInput = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

    strictEqual(containsDuplicate(thirdInput), true);

  });
});
