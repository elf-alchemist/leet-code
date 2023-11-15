
//
// LeetCode 2666 - Yet unsolved
//

// Given a function `fn`, return a new function that is identical
// to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

// Example 1:
//   Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
//   Output: [{"calls":1,"value":6}]
//   Explanation:
//     const onceFn = once(fn);
//     onceFn(1, 2, 3); // 6
//     onceFn(2, 3, 6); // undefined, fn was not called

// Example 2:
//   Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
//   Output: [{"calls":1,"value":140}]
//   Explanation:
//     const onceFn = once(fn);
//     onceFn(5, 7, 4); // 140
//     onceFn(2, 3, 6); // undefined, fn was not called
//     onceFn(4, 6, 8); // undefined, fn was not called

// Constraints:
//   `calls` is a valid JSON array
//   `1 <= calls.length <= 10`
//   `1 <= calls[i].length <= 100`
//   `2 <= JSON.stringify(calls).length <= 1000`

import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';

/**
 * @param {(...args: Array<any>) => any} fn
 * @return {(...args: Array<any>) => any}
 */
function once(fn) {
  let called = false;
  return function (...args) {
    if (called) return undefined;
    called = !called;
    return fn(...args);
  };
};

describe('LeetCode - 2666', () => {
  test('Case 1', () => {

    /** @type {(...args: Array<number>) => number} */
    const func = (a, b, c) => a + b + c;
    const onceFunc = once(func);

    const result = [
      onceFunc(1, 2, 3),
      onceFunc(2, 3, 6),
    ];


    deepStrictEqual(result, [6, undefined]);

  });
  test('Case 2', () => {

    /** @type {(...args: Array<number>) => number} */
    const func = (a, b, c) => a * b * c;
    const onceFunc = once(func);

    const result = [
      onceFunc(5, 7, 4),
      onceFunc(2, 3, 6),
      onceFunc(4, 6, 8),
    ];

    deepStrictEqual(result, [140, undefined, undefined]);

  });
});
