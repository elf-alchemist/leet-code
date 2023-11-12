import { describe, test } from 'node:test';
import { deepStrictEqual, strictEqual } from 'node:assert';

class Stack {
  /** @param {Array<number>} init  */
  constructor(init) {

    /** @type {Array<number>} */
    this.list = init;

    /** @type {number} */
    this.size = init.length;
  }

  pop() {
    const element = this.list.pop();
    if (element === undefined) return;
    this.size--;
  }

  /** @return {number | void} */
  peek() {
    const element = this.list.at(-1);
    if (element === undefined) return;
    return element;
  }
}

describe('Linked List', () => {
  test('Return empty head correctly', () => {

    const stack = new Stack([]);
    const value = stack.peek()

    strictEqual(value, undefined);

  });
});
