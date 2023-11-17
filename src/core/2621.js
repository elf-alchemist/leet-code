
//
// LeetCode 2621 - JavaScript - Sleep
//

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
// It can resolve any value.

// Example 1:
//   Input: millis = 100;
//   Output: 100;
//   Explanation: It should return a promise that resolves after 100ms.;
//     let t = Date.now();
//     sleep(100).then(() => {
//       console.log(Date.now() - t); // 100
//     });

// Example 2:
//   Input: millis = 200;
//   Output: 200;
//   Explanation: It should return a promise that resolves after 200ms.

// Constraints:
//   `1 <= millis <= 1000`

import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

/**
 * @param {number} millis
 * @return {Promise<any>}
 */
function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

describe('LeetCode - 2666', () => {
  test('Case 1', async () => {

    const past = Date.now();
    const millis = 100;
    const time = await sleep(millis).then(() => Date.now() - past);

    const margin = (time - millis) < 10;

    strictEqual(margin, true);

  });
  test('Case 2', async () => {

    const past = Date.now();
    const millis = 200;
    const time = await sleep(millis).then(() => Date.now() - past);

    const margin = (time - millis) < 10;

    strictEqual(margin, true);

  });
});
