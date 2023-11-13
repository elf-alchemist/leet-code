
//
// LeetCode 2667 - Solved
//

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:
//   Input:       args = [];
//   Output:      "Hello World";
//   Explanation: const f = createHelloWorld();
//                f(); // "Hello World"
//                The function returned by createHelloWorld should always return "Hello World".

// Example 2:
//   Input:       args = [{}, null, 42];
//   Output:      "Hello World";
//   Explanation: const f = createHelloWorld();
//                f({}, null, 42); // "Hello World"
//                Any arguments could be passed to the function but it should still always return "Hello World".

// Constraints:
// `0 <= args.length <= 10`

import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

/**
 * @return {Function}
 */
function createHelloWorld() {
  /** @param {Array<unknown>} args */
  return function(...args) {
    return 'Hello World';
  };
}

const func = createHelloWorld();


describe('LeetCode - 2667', () => {
  test('Case 1', () => {

    strictEqual(func(), 'Hello World');

  });
});
