
//
// LeetCode challange: 2 - Yet unsolved
//

// You are given two non - empty linked lists representing two non - negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
//   Input:       l1 = [2, 4, 3], l2 = [5, 6, 4]
//   Output:      [7, 0, 8]
//   Explanation: 342 + 465 = 807

// Example 2:
//   Input:       l1 = [0], l2 = [0]
//   Output:      [0]

// Example 3:
//   Input:       l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
//   Output:      [8, 9, 9, 9, 0, 0, 0, 1]

import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';

class ListNode {
  /** @type {number} */
  value = 0

  /** @type {ListNode | null} */
  next = null

  /**
   * @param {number | undefined} value
   * @param {ListNode | undefined} next
   */
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} listNode1
 * @param {ListNode} listNode2
 * @return {ListNode}
 */
function addTwoNumbers(listNode1, listNode2) {
  let result = undefined;

  while (listNode1 || listNode2) {
    if (listNode1) {
      listNode1 = listNode1.next
    }
    if (listNode2) {
      listNode2 = listNode2.next
    }
  }

  return result;
};

describe('LeetCode - 2', { timeout: 1_000 }, () => {
  test('Case 1', () => {

    const firstInput = new ListNode(2, new ListNode(4, new ListNode(3, undefined)));
    const secondInput = new ListNode(5, new ListNode(6, new ListNode(4, undefined)));

    const result = addTwoNumbers(firstInput, secondInput);

    deepStrictEqual(result, new ListNode(7, new ListNode(0, new ListNode(8, undefined))));
  })
})
