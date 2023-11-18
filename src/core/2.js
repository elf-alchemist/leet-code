//
// LeetCode 2 - Add Two Numbers
//

// You are given two non-empty linked lists representing two non-negative integers.
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
import { ListNode, listFromArray } from '../lib/util.js';

/**
 * @param {ListNode | null} listNode1
 * @param {ListNode | null} listNode2
 * @return {ListNode | null}
 */
function addTwoNumbers(listNode1, listNode2) {
  const head = new ListNode(0, undefined);
  let curr = head;
  let carry = 0;
  let sum = 0;
  let value1 = 0;
  let value2 = 0;

  while (listNode1 || listNode2) {
    if (listNode1) {
      value1 = listNode1.val;
      listNode1 = listNode1.next;
    }
    if (listNode2) {
      value2 = listNode2.val;
      listNode2 = listNode2.next;
    }
    sum = value1 + value2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
  }

  return head.next;
}

describe('LeetCode - 2', () => {
  test('Case 1', () => {
    const firstInput = listFromArray([2, 4, 3]);
    const secondInput = listFromArray([5, 6, 4]);

    const result = addTwoNumbers(firstInput, secondInput);

    deepStrictEqual(result, listFromArray([7, 0, 8]));
  });
  test('Case 2', () => {
    const firstInput = new ListNode(0, null);
    const secondInput = new ListNode(0, null);

    const result = addTwoNumbers(firstInput, secondInput);

    deepStrictEqual(result, new ListNode(0, null));
  });
  test('Case 3', () => {
    const firstInput = listFromArray([9, 9, 9, 9, 9, 9, 9]);
    const secondInput = listFromArray([9, 9, 9, 9]);

    const result = addTwoNumbers(firstInput, secondInput);

    deepStrictEqual(result, listFromArray([8, 9, 9, 9, 0, 0, 0, 1]));
  });
});
