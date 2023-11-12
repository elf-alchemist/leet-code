
//
// LeetCode challenge: 2665 - Solved
//

// Write a function createCounter.
// It should accept an initial integer init.
// It should return an object with three functions.

// The three functions are:
//   increment()  increases the current value by 1 and then returns it.
//   decrement()  reduces the current value by 1 and then returns it.
//   reset()      sets the current value to init and then returns it.

// Example 1:
//   Input:       init = 5, calls = ["increment", "reset", "decrement"]
//   Output:      [6, 5, 4]
//   Explanation:
//     const counter = createCounter(5);
//     counter.increment(); // 6
//     counter.reset();     // 5
//     counter.decrement(); // 4

// Example 2:
//   Input:       init = 0, calls = ["increment", "increment", "decrement", "reset", "reset"]
//   Output:      [1, 2, 1, 0, 0]
//   Explanation:
//     const counter = createCounter(0);
//     counter.increment(); // 1
//     counter.increment(); // 2
//     counter.decrement(); // 1
//     counter.reset();     // 0
//     counter.reset();     // 0

import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';

/**
 * @param {number} init
 * @return {{ increment: Function, decrement: Function, reset: Function }}
 */
function createCounter(init) {
  let value = init;
  return {
    increment: function() {
      return ++value;
    },
    decrement: function() {
      return --value;
    },
    reset: function() {
      return value = init;
    },
  }
};


describe('LeetCode - 2667', () => {
  test('Case 1', () => {

    const counter = createCounter(5);
    const result = [];

    result.push(counter.increment());
    result.push(counter.reset());
    result.push(counter.decrement());

    deepStrictEqual(result, [6, 5, 4]);

  });
  test('Case 2', () => {

    const counter = createCounter(0);
    const result = [];

    result.push(counter.increment());
    result.push(counter.increment());
    result.push(counter.decrement());
    result.push(counter.reset());
    result.push(counter.reset());

    deepStrictEqual(result, [1, 2, 1, 0, 0]);

  });
});
