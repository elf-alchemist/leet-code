
//
// LeetCode challenge: 242 - Solved
//

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
//   Input: s = "anagram", t = "nagaram";
//   Output: true

// Example 2:
//   Input: s = "rat", t = "car";
//   Output: false;

// Constraints:
//   `1 <= s.length, t.length <= 5 * 10^4`
//   `s` and `t` consist of lowercase English letters.

import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

/**
 * @param {string} s
 * @param {string} t
 */
function isAnagram(s, t) {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');
  if (sortedS === sortedT) return true;
  return false;
}

describe('LeetCode - 242', { timeout: 1_000 }, () => {
  test('Case 1', () => {

    const firstS = 'anagram';
    const firstT = 'nagaram';

    strictEqual(isAnagram(firstS, firstT), true);

  });
  test('Case 2', () => {

    const secondS = 'rat';
    const secondT = 'car';

    strictEqual(isAnagram(secondS, secondT), false);

  });
});
