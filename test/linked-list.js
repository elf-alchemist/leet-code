import { describe, test } from 'node:test';
import { deepStrictEqual, strictEqual } from 'node:assert';

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
    this.size = 1;

  }

  findHead() {
    return this.head.value;
  }

  findTail() {
    let curr = this.head;
    while (curr.next) curr = curr.next;
    return curr.value;
  }

  /** @param {number} index */
  findIndex(index) {
    if (index < 0) return;
    if (index >= this.size) return;

    if (index === 0) {
      return this.head.value;
    }

    /** @type {LinkedListNode} */
    let curr = this.head;
    let count = 0;

    while (index > count++ && curr.next) curr = curr.next;

    return curr.value;
  }

  /** @param {number} value  */
  insertHead(value) {
    this.head = new LinkedListNode(value, this.head);
    this.size++;
    return;
  }

  /** @param {number} value  */
  insertTail(value) {
    const node = new LinkedListNode(value, undefined);
    let curr = this.head;

    while (curr.next) curr = curr.next;
    curr.next = node;

    this.size++;
    return;
  }

  /**
   * @param {number} value
   * @param {number} index
   * */
  insertIndex(value, index) {
    if (index < 0) return;
    if (index >= this.size) return;

    if (index === 0) {
      const node = new LinkedListNode(value, this.head);
      this.head = node;
      return;
    }

    let curr = this.head;
    let prev = this.head;

    let count = 0;
    while (index > count++ && curr.next) {
      prev = curr;
      curr = curr.next;
    }

    const node = new LinkedListNode(value, curr);
    prev.next = node;

    this.size++;
    return;
  }

  toArray() {
    /** @type {LinkedListNode} */
    let curr = this.head;
    const result = [];

    while (curr.next) result.push(curr.value) && (curr = curr.next);
    result.push(curr.value)

    this.countSize();
    return result;
  }

  countSize() {
    let curr = this.head;

    this.size = 0;
    while (curr.next) (curr = curr.next) && this.size++;
    this.size++;

    return this.size;
  }

  clear() {
    this.head = new LinkedListNode(undefined, undefined);
    this.size = 1;
  }
}

describe('Linked List', () => {
  test('Counting size correctly', () => {

    const list = new LinkedList(undefined);
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);
    list.insertTail(4);
    list.insertTail(5);

    const value = list.countSize();

    strictEqual(value, 6);

  });
  test('Return head correctly', () => {

    const list = new LinkedList(undefined);
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);

    const value = list.findHead();

    strictEqual(value, 0)

  });

  test('Return tail correctly', () => {

    const list = new LinkedList(undefined);
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);

    const value = list.findTail();

    strictEqual(value, 3)

  });

  test('Return at index correctly', () => {

    const list = new LinkedList(undefined);
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);

    const value = list.findIndex(2);

    strictEqual(value, 2)

  });
  test('Insert at head correctly', () => {

    const list = new LinkedList(undefined);
    list.insertHead(1);
    list.insertHead(2);
    list.insertHead(3);

    const value = list.toArray();

    deepStrictEqual(value, [3, 2, 1, 0]);

  });
  test('Insert at tail correctly', () => {

    const list = new LinkedList(undefined);
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);

    const value = list.toArray();

    deepStrictEqual(value, [0, 1, 2, 3]);

  });
  test('Insert at index correctly', () => {

    const list = new LinkedList(undefined);
    list.insertTail(1);
    list.insertTail(3);
    list.insertIndex(2, 2);

    const value = list.toArray();

    deepStrictEqual(value, [0, 1, 2, 3]);

  });
});
