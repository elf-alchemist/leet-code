
//
// LeetCode 2723 - Yet unsolved
//

// Given two promises promise1 and promise2, return a new promise.
// Both promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

// Example 1:
// Input:
//   promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
//   promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
// Output: 7;
// Explanation:
//   The two input promises resolve with the values of 2 and 5 respectively.
//   The returned promise should resolve with a value of 2 + 5 = 7.
//   The time the returned promise resolves is not judged for this problem.

// Example 2:
// Input:
//   promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
//   promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30));
// Output:
//   -2;
// Explanation:
//   The two input promises resolve with the values of 10 and -12 respectively.
//   The returned promise should resolve with a value of 10 + -12 = -2.

// Constraints:
//   `promise1` and `promise2` are promises that resolve with a number;

import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

/**
 * @param {Promise<number>} promise1
 * @param {Promise<number>} promise2
 * @return {Promise<number>}
 */
async function addTwoPromises(promise1, promise2) {
  const value1 = await promise1;
  const value2 = await promise2;
  return Promise.resolve(value1 + value2);
}

describe('LeetCode - 2723', () => {
  test('Case 1', async () => {
    const result = await addTwoPromises(
      Promise.resolve(2),
      Promise.resolve(5),
    );

    strictEqual(result, 7);
  });
  test('Case 2', async () => {
    const result = await addTwoPromises(
      Promise.resolve(10),
      Promise.resolve(-12),
    );

    strictEqual(result, -2);
  });
  test('Case 3', async () => {
    const result = await addTwoPromises(
      Promise.resolve(2),
      Promise.resolve(2),
    );

    strictEqual(result, 4);
  });
});
