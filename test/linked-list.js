import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

class LinkedListNode {
  /**
   * @param {number | undefined} value
   * @param {LinkedListNode | undefined} next
   */
  constructor(value, next) {

    /** @type {number} */
    this.value = value ?? 0;

    /** @type {LinkedListNode | null} */
    this.next = next ?? null;

  }
}

class LinkedList {
  /** @param {LinkedListNode} init */
  constructor(init) {

    /** @type {LinkedListNode} */
    this.head = init;

    /** @type {number} */
    this.size = 0;

  }

  retrieveHeadNode() {
    return this.head;
  }

  retrieveTailNode() {
    let curr = this.head;
    while (curr.next !== null) curr = curr.next;
    return curr;
  }

  /** @param {number} index */
  retrieveNodeAtIndex(index) {
    let count = 0;
    let curr = this.head;
    while (count < index) curr = curr.next;
    return curr;
  }
}

describe('Linked List', () => {
  const listNode3 = new LinkedListNode(3, undefined);
  const listNode2 = new LinkedListNode(2, listNode3);
  const listNode1 = new LinkedListNode(1, listNode2);
  const listNode0 = new LinkedListNode(0, listNode1);

  const list0 = new LinkedList(listNode0);

  test('Return head correctly', () => {

    const node = list0.retrieveHeadNode();

    strictEqual(node.value, 0)

  });

  test('Return tail correctly', () => {

    const node = list0.retrieveTailNode();

    strictEqual(node.value, 3)

  });

  test('Return at index correctly', () => {

    const node = list0.retrieveNodeAtIndex(2);

    strictEqual(node.value, 2)

  });
});
