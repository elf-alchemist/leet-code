
//
// LeetCode challenge: 14 - Solved
//

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
//   Input:       strs = ["flower", "flow", "flight"];
//   Output:      "fl"

// Example 2:
//   Input:       strs = ["dog", "racecar", "car"];
//   Output:      "";
//   Explanation: There is no common prefix among the input strings.

// Constraints:
//   `1 <= strs.length <= 200`
//   `0 <= strs[i].length <= 200`
//   `strs[i]` consists of only lowercase English letters.

import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

/**
 * @param {Array<string>} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let result = '';

  // @ts-ignore
  for (let index = 0; index < strs[0].length; index++) {
    // @ts-ignore
    if (strs.every((str) => str[index] === strs[0][index])) result += strs[0][index];
    else break;
  }

  return result;
};

describe('LeetCode - 14', () => {
  test('Case 1', () => {

    const firstInput = ['flower', 'flow', 'flight']

    strictEqual(longestCommonPrefix(firstInput), 'fl');

  });
  test('Case 2', () => {

    const secondInput = ['dog', 'racecar', 'car'];

    strictEqual(longestCommonPrefix(secondInput), '');

  });
  test('Case 3', () => {

    const thirdInput = [''];

    strictEqual(longestCommonPrefix(thirdInput), '');

  });
  test('Case 4', () => {

    const fourthInput = ['a'];

    strictEqual(longestCommonPrefix(fourthInput), 'a');

  });
});
