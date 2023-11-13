
//
// LeetCode 1 - Solved
//

// Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
//   Input:       nums = [2, 7, 11, 15], target = 9
//   Output:      [0, 1]
//   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
//   Input:       nums = [3, 2, 4], target = 6
//   Output:      [1, 2]

// Example 3:
//   Input:       nums = [3, 3], target = 6
//   Output:      [0, 1]

import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';

/**
 * @param {Array<number>} nums
 * @param {number} target
 * @return {[number, number]}
 */
function twoSum(nums, target) {
  /** @type {Map<number, number>} */
  const numsMap = new Map();

  /** @type {[number, number]} */
  let result = [0, 0];

  for (let index = 0; index < nums.length; index++) {
    // @ts-ignore
    const diff = target - nums[index];
    const exists = numsMap.get(diff);
    if (exists !== undefined) result = [exists, index];
    // @ts-ignore
    numsMap.set(nums[index], index)
  }

  return result;
};


describe('LeetCode - 1', () => {
  test('Case 1', () => {

    const firstNums = [2, 7, 11, 15];
    const firstTarget = 9;
    const firstResult = twoSum(firstNums, firstTarget)

    deepStrictEqual(firstResult, [0, 1]);
  });

  test('Case 2', () => {

    const secondNums = [3, 2, 4];
    const secondTarget = 6;
    const secondResult = twoSum(secondNums, secondTarget)

    deepStrictEqual(secondResult, [1, 2]);
  });

  test('Case 3', () => {

    const thirdNums = [3, 3];
    const thirdTarget = 6;
    const thirdResult = twoSum(thirdNums, thirdTarget)

    deepStrictEqual(thirdResult, [0, 1]);
  });
})
