
//
// LeetCode chanllenge: 21 - Yet unsolved.
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
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} listNode1
 * @param {ListNode} listNode2
 * @return {ListNode}
 */
function mergeTwoLists(listNode1, listNode2) {
  const tempNode = new ListNode(0, undefined);
  let currenctNode = tempNode;

  while (listNode1 && listNode2) {

  }

  return result;
};

deepStrictEqual(
  mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4, undefined))),
    new ListNode(1, new ListNode(3, new ListNode(4, undefined))),
  ),
  new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, undefined)))))),
);
