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
  /** @param {LinkedListNode | undefined} init */
  constructor(init) {

    /** @type {LinkedListNode} */
    this.head = init ?? new LinkedListNode(0, undefined);

    /** @type {number} */
    this.size = 0;

  }

  retrieveHeadValue() {
    return this.head.value;
  }

  retrieveTailValue() {
    let curr = this.head;
    while (curr.next !== null) curr = curr.next;
    return curr.value;
  }

  /** @param {number} index */
  retrieveValueAtIndex(index) {
    let count = 0;
    let curr = this.head;
    while (count++ < index) curr = curr.next;
    return curr.value;
  }

  /** @param {number} value  */
  insertHeadValue(value) {
    this.head = new LinkedListNode(value, this.head);
    return this.retrieveHeadValue();
  }

  /** @param {number} value  */
  insertTailValue(value) {
    const node = new LinkedListNode(value, undefined);
    let curr = this.head;
    while (curr.next !== null) curr = curr.next;
    curr.next = node;
    return this.retrieveTailValue();
  }

  /**
   * @param {number} value
   * @param {number} index
   * */
  insertValueAtIndex(value, index) {
    const node = new LinkedListNode(value, undefined);
    let count = 0;
    let curr = this.head;

    while (count++ < index) curr = curr.next;

    let temp = curr;
    curr = node;
    node.next = temp;

    return curr.value;
  }

  retriveListAsArray() {
    const result = [];
    let curr = this.head;
    while (curr.next !== null) {
      result.push(curr.value);
      curr = curr.next;
    }
    return result
  }

  clearList() {
    this.head = new LinkedListNode(undefined, undefined);
  }
}

describe('Linked List', () => {
  test('Return head correctly', () => {

    const list = new LinkedList(undefined);
    list.insertTailValue(1);
    list.insertTailValue(2);
    list.insertTailValue(3);

    const value = list.retrieveHeadValue();

    strictEqual(value, 0)

  });

  test('Return tail correctly', () => {

    const list = new LinkedList(undefined);
    list.clearList();
    list.insertTailValue(1);
    list.insertTailValue(2);
    list.insertTailValue(3);

    const value = list.retrieveTailValue();

    strictEqual(value, 3)

  });

  test('Return at index correctly', () => {

    const list = new LinkedList(undefined);
    list.clearList();
    list.insertTailValue(1);
    list.insertTailValue(2);
    list.insertTailValue(3);

    const value = list.retrieveValueAtIndex(2);

    strictEqual(value, 2)

  });
});
