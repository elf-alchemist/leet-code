
//
// LeetCode 169 - Majority Element
//

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:
//   Input: nums = [3, 2, 3];
//   Output: 3

// Example 2:
//   Input: nums = [2, 2, 1, 1, 1, 2, 2];
//   Output: 2;

// Constraints:
//   `n == nums.length`
//   `1 <= n <= 5 * 10^4`
//   `-10^9 <= nums[i] <= 10^9`

import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';

/**
 * @param {Array<number>} nums
 * @return {number}
 */
function majorityElement(nums) {
  /** @type {Map<number, number>} */
  const map = new Map();
  const quan = Math.floor(nums.length / 2);

  let acc;

  for(const num of nums) {
    acc = map.get(num) ?? 0;
    if (acc === quan) return num;
    map.set(num, acc + 1);
  }

  return 0;
}

describe('LeetCode - 169', () => {
  test('Case 1', () => {
    const result = majorityElement([3, 2, 3]);

    deepStrictEqual(result, 3);
  });
  test('Case 2', () => {
    const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);

    deepStrictEqual(result, 2);
  });
});
