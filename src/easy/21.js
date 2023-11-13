
//
// LeetCode 21 - Solved
//

// You are given the heads of two sorted linked lists `list1` and `list2`.
// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the _head of the merged linked list_.

// Example 1:
//   Input:  list1 = [1, 2, 4], list2 = [1, 3, 4]
//   Output: [1, 1, 2, 3, 4, 4]

// Example 2:
//   Input:  list1 = [], list2 = []
//   Output: []

// Example 3:
//   Input:  list1 = [], list2 = [0]
//   Output: [0]

// Constraints:
//   The number of nodes in both lists is in the range [0, 50].
//   `-100 <= Node.val <= 100`
//   Both `list1` and `list2` are sorted in _non-decreasing_ order.

import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';

class ListNode {
  /** @type {number} */
  value = 0;

  /** @type {ListNode | null} */
  next = null;

  /**
   * @param {number | undefined} value
   * @param {ListNode | undefined} next
   */
  constructor(value, next) {
    this.value = value ?? 0;
    this.next = next ?? null;
  }
}

/**
 * @param {ListNode | null} listNode1
 * @param {ListNode | null} listNode2
 * @return {ListNode | null}
 */
function mergeTwoLists(listNode1, listNode2) {
  let dummy = new ListNode(undefined, undefined);
  let curr = dummy;

  while (listNode1 && listNode2) {
    if (listNode1.value < listNode2.value) {
      curr.next = listNode1;
      listNode1 = listNode1.next;
    } else {
      curr.next = listNode2;
      listNode2 = listNode2.next;
    }
    curr = curr.next;
  }

  curr.next = listNode1 ?? listNode2;
  return dummy.next;
};

describe('LeetCode - 21', () => {
  test('Case 1', () => {

    const firstInput = new ListNode(1, new ListNode(2, new ListNode(4, undefined)));
    const secondInput = new ListNode(1, new ListNode(3, new ListNode(4, undefined)));

    const result = mergeTwoLists(firstInput, secondInput);

    deepStrictEqual(result, new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, undefined)))))));
  });
});
