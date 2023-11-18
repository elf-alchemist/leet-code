import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';

class Stack {
  constructor() {
    /** @type {Array<number>} */
    this.list = [];

    /** @type {number} */
    this.size = 0;
  }

  /** @param {number} element */
  push(element) {
    this.list[this.size] = element;
    this.size++;
  }

  pop() {
    const element = this.list[this.size - 1];
    if (element === undefined) return undefined;
    this.size--;
    return element;
  }

  peek() {
    return this.list[this.size - 1];
  }

  clear() {
    this.list = [];
    this.size = 0;
  }

  length() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

describe('Stack', () => {
  test('Is empty correctly', () => {
    const stack = new Stack();

    const value = stack.isEmpty();

    strictEqual(value, true);
  });
  test('Peek empty head correctly', () => {
    const stack = new Stack();

    const value = stack.peek();

    strictEqual(value, undefined);
  });
  test('Pop empty head correctly', () => {
    const stack = new Stack();

    const value = stack.pop();

    strictEqual(value, undefined);
  });
  test('Push empty correctly', () => {
    const stack = new Stack();
    stack.push(0);

    const value = stack.peek();

    strictEqual(value, 0);
  });
  test('Is non-empty correctly', () => {
    const stack = new Stack();
    stack.push(0);

    const value = stack.isEmpty();

    strictEqual(value, false);
  });
  test('Peek non-empty head correctly', () => {
    const stack = new Stack();
    stack.push(0);

    const value = stack.peek();

    strictEqual(value, 0);
  });
  test('Push non-empty correctly', () => {
    const stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);

    const value = stack.peek();

    strictEqual(value, 3);
  });
  test('Pop non-empty correctly', () => {
    const stack = new Stack();
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();

    const value = stack.peek();

    strictEqual(value, 2);
  });
});
