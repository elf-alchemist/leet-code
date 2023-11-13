
//
// LeetCode challenge: 2626 - Yet unsolved
//

// Given an integer array `nums`, a reducer function `fn`,
// and an initial value `init`, return a reduced array.
// A reduced array is created by applying the following operation:
// `val = fn(init, nums[0])`, `val = fn(val, nums[1])`, `val = fn(val, nums[2])`, `...`
// until every element in the array has been processed.
// The final value of `val` is returned.
// If the length of the array is 0, it should return `init`.
// Please solve it without using the built-in `Array.prototype.reduce` method.

// Example 1:
//   Input:       nums = [1, 2, 3, 4]
//                fn = function sum(accum, curr) { return accum + curr; }
//                init = 0
//   Output:      10
//   Explanation:
//     initially, the value is init = 0.
//     (0) + nums[0] = 1
//     (1) + nums[1] = 3
//     (3) + nums[2] = 6
//     (6) + nums[3] = 10
//     The final answer is 10.

// Example 2:
//   Input:       nums = [1, 2, 3, 4]
//                fn = function sum(accum, curr) { return accum + curr * curr; }
//                init = 100
//   Output:      130
//   Explanation:
//     initially, the value is init = 100.
//     (100) + nums[0] ^ 2 = 101
//     (101) + nums[1] ^ 2 = 105
//     (105) + nums[2] ^ 2 = 114
//     (114) + nums[3] ^ 2 = 130
//     The final answer is 130.

// Example 3:
//   Input:       nums = []
//                fn = function sum(accum, curr) { return 0; }
//                init = 25
//   Output:      25
//   Explanation: For empty arrays, the answer is always init.

// Constraints:
//   `0 <= nums.length <= 1000`
//   `0 <= nums[i] <= 1000`
//   `0 <= init <= 1000`
//   Explanation: Falsey values such as 0 should be filtered out;

import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';

/**
 * @param {Array<number>} arr
 * @param {(acc: number, curr: number) => number} fn
 * @param {number} init
 * @return {number}
 */
function reduce(arr, fn, init) {
  let result = init;

  for (let index = 0; index < arr.length; index++) {
    const num = arr[index];
    if (num === undefined) continue;
    result = fn(result, num);
  }

  return result;
};

/**
 * @param {number} acc
 * @param {number} curr
 */
function sum(acc, curr) {
  return acc + curr;
}

/**
 * @param {number} acc
 * @param {number} curr
 */
function squareSum(acc, curr) {
  return acc + curr * curr;
}

/**
 * @param {number} acc
 * @param {number} curr
 */
function constant(acc, curr) {
  return 0;
}

describe('LeetCode - 2635', () => {
  test('Case 1', () => {
    const arr = [1, 2, 3, 4];
    const init = 0;

    const result = reduce(arr, sum, init);

    deepStrictEqual(result, 10);
  });
  test('Case 2', () => {
    const arr = [1, 2, 3, 4];
    const init = 100;

    const result = reduce(arr, squareSum, init);

    deepStrictEqual(result, 130);
  });
  test('Case 3', () => {
    /** @type {Array<number>} */
    const arr = [];
    const init = 25;

    const result = reduce(arr, constant, init);

    deepStrictEqual(result, 25);
  });
});
