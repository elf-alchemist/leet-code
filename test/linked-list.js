import { describe, test } from 'node:test';
import { deepStrictEqual } from 'node:assert';

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

  }
}

describe('Linked List', () => {
  test('Dummy test, example only.', () => {

    deepStrictEqual(
      new LinkedList(new LinkedListNode(undefined, undefined)),
      new LinkedList(new LinkedListNode(undefined, undefined)),
    );

  });
});
