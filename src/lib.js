export class ListNode {
  /**
   * @param {number | undefined} val
   * @param {ListNode | null | undefined} next
   */
  constructor(val, next) {
    /** @type {number} */
    this.val = val === undefined ? 0 : val;
    /** @type {ListNode | null} */
    this.next = next === undefined ? null : next;
  }
}

/** @param {ListNode | null} head */
export function listToArray(head) {
  const result = [];
  let curr = head;

  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }

  return result;
}

/** @param {Array<number>} array */
export function listFromArray(array) {
  const head = new ListNode(0, null);
  let curr = head;

  for (const num of array) {
    curr.next = new ListNode(num, null);
    curr = curr.next;
  }

  return head.next ?? head;
}
