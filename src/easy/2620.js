
//
// LeetCode 2620 - Solved
//

// Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called(n, n + 1, n + 2, etc).

// Example 1:
//   Input:       n = 10, ["call", "call", "call"]
//   Output:      [10, 11, 12]
//   Explanation: counter() = 10; // The first time counter() is called, it returns n.
//                counter() = 11; // Returns 1 more than the previous time.
//                counter() = 12; // Returns 1 more than the previous time.

// Example 2:
//   Input:       n = -2, ["call", "call", "call", "call", "call"]
//   Output:      [-2, -1, 0, 1, 2]
//   Explanation: counter() initially returns - 2.
//                Then increases after each sebsequent call.

// Constraints:
//   `-1000 <= n <= 1000`
//   `0 <= calls.length <= 1000`
//   `calls[i] === "call"`

import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert'

/**
 * @param {number} n
 * @return {Function} counter
 */
function createCounter(n) {
  return function () {
    const x = n++;
    return x;
  };
};

describe('LeetCode - 2620', () => {
  test('Case 1', () => {
    const func = createCounter(10)

    strictEqual(func(), 10);
    strictEqual(func(), 11);
    strictEqual(func(), 12);
  });
  test('Case 2', () => {
    const func = createCounter(-2);

    strictEqual(func(), -2);
    strictEqual(func(), -1);
    strictEqual(func(),  0);
    strictEqual(func(),  1);
    strictEqual(func(),  2);
  });
});
