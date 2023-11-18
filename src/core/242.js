//
// LeetCode 242 - Valid Anagram
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
  if (s.length !== t.length) return false;

  /** @type {Map<string, number>} */
  const sMap = new Map();
  /** @type {Map<string, number>} */
  const tMap = new Map();

  for (let index = 0; index < s.length; index++) {
    // @ts-ignore
    const valueS = sMap.get(s[index]) ?? 0;
    // @ts-ignore
    sMap.set(s[index], valueS + 1);

    // @ts-ignore
    const valueT = tMap.get(t[index]) ?? 0;
    // @ts-ignore
    tMap.set(t[index], valueT + 1);
  }

  for (const key of sMap.keys()) if (sMap.get(key) !== tMap.get(key)) return false;

  return true;
}

describe('LeetCode - 242', () => {
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
  test('Case 3', () => {
    const thirdS = '';
    const thirdT = '';

    strictEqual(isAnagram(thirdS, thirdT), true);
  });
});
