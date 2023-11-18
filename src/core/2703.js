//
// LeetCode - JavaScript - Return Length of Arguments Passed
//

// Write a function `argumentsLength` that returns the count of arguments passed to it.

// Example 1:
//   Input:       args = [5]
//   Output:      1
//   Explanation:
//     argumentsLength(5); // 1
//     One value was passed to the function so it should return 1.

// Example 2:
//   Input:       args = [{}, null, "3"]
//   Output:      3
//   Explanation:
//     argumentsLength({}, null, "3"); // 3
//     Three values were passed to the function so it should return 3.

// Constraints:
//   `args` is a valid JSON array
//   `0 <= args.length <= 100`

import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

/**
 * @param {...(unknown)} args
 * @return {number}
 */
function argumentsLength(...args) {
  return args.length;
}

describe('LeetCode - 2703', () => {
  test('Case 1', () => {
    const result = argumentsLength(5);

    strictEqual(result, 1);
  });
  test('Case 2', () => {
    const result = argumentsLength({}, null, '3');

    strictEqual(result, 3);
  });
  test('Case 3', () => {
    const result = argumentsLength(1, 2, 3);

    strictEqual(result, 3);
  });
});
