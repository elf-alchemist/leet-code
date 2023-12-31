//
// LeetCode 2635 - JavaScript - Apply Transform Over Each Element in Array
//

// Given an integer array `arr` and a mapping function `fn`,
// return a new array with a transformation applied to each element.
// The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`
// Please solve it without the built-in `Array.protoype.map` method.

// Example 1:
//   Input:       arr = [1, 2, 3], fn = function plusone(n) { return n + 1; }
//   Output:      [2, 3, 4]
//   Explanation:
//     const newArray = map(arr, plusone); // [2,3,4]
//     The function increases each value in the array by one.

// Example 2:
//   Input:       arr = [1, 2, 3], fn = function plusI(n, i) { return n + i; }
//   Output:      [1, 3, 5]
//   Explanation: The function increases each value by the index it resides in.

// Example 3:
//   Input:       arr = [10, 20, 30], fn = function constant() { return 42; }
//   Output:      [42, 42, 42]
//   Explanation: The function always returns 42.

// Constraints:
//   `0 <= arr.length <= 1000`
//   `-10^9 <= arr[i] <= 10^9`
//   `fn` returns a number

import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';

/**
 * @param {Array<number>} arr
 * @param {(n: number, index: number) => number} fn
 */
function map(arr, fn) {
  const result = [];

  for (let index = 0; index < arr.length; index++) {
    const num = arr[index];
    if (num === undefined) continue;
    const value = fn(num, index);
    result.push(value);
  }

  return result;
}

/**
 * @param {number} n
 * @param {number} _i
 */
// eslint-disable-next-line no-unused-vars
function plusOne(n, _i) {
  return n + 1;
}

/**
 * @param {number} n
 * @param {number} i
 */
// eslint-disable-next-line no-unused-vars
function plusIndex(n, i) {
  return n + i;
}

/**
 * @param {number} _n
 * @param {number} _i
 */
// eslint-disable-next-line no-unused-vars
function constant(_n, _i) {
  return 42;
}

describe('LeetCode - 2635', () => {
  test('Case 1', () => {
    const arr = [1, 2, 3];

    const result = map(arr, plusOne);

    deepStrictEqual(result, [2, 3, 4]);
  });
  test('Case 2', () => {
    const arr = [1, 2, 3];

    const result = map(arr, plusIndex);

    deepStrictEqual(result, [1, 3, 5]);
  });
  test('Case 3', () => {
    const arr = [1, 2, 3];

    const result = map(arr, constant);

    deepStrictEqual(result, [42, 42, 42]);
  });
});
