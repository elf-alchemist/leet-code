
//
// LeetCode 206 - Yet unsolved
//

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
//   Input:  head = [1, 2, 3, 4, 5];
//   Output: [5, 4, 3, 2, 1]

// Example 2:
//   Input:  head = [1, 2];
//   Output: [2, 1]

// Example 3:
//   Input:  head = [];
//   Output: [];

// Constraints:
//   The number of nodes in the list is the range `[0, 5000]`
//   `-5000 <= Node.val <= 5000`

import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';
import { ListNode, listFromArray } from '../lib.js';

/**
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
function reverseList(head) {
  return head;
};

describe('LeetCode - 206', () => {
  test('Case 1', () => {
    const list = listFromArray([1, 2, 3, 4, 5]);

    const result = reverseList(list);

    deepStrictEqual(result, listFromArray([5, 4, 3, 2, 1]));
  });
  test('Case 2', () => {
    const list = listFromArray([1, 2]);

    const result = reverseList(list);

    deepStrictEqual(result, listFromArray([2, 1]));
  });
  test('Case 3', () => {
    const list = listFromArray([]);

    const result = reverseList(list);

    deepStrictEqual(result, listFromArray([]));
  });
});
