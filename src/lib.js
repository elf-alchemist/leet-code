class ListNode {
  /** @type {number} */ value = 0;
  /** @type {ListNode | null} */ next = null;

  /**
   * @param {number | undefined} value
   * @param {ListNode | null | undefined} next
   */
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

/** @param {ListNode | null} head */
function listToArray(head) {
  let curr = head;
  const result = [];

  while (curr) {
    result.push(curr.value);
    curr = curr.next;
  }

  return result;
}

/** @param {Array<number>} array */
function listFromArray(array) {
  const head = new ListNode(0, null);
  let curr = head;

  for (const num of array) {
    curr.next = new ListNode(num, null);
    curr = curr.next;
  }

  return head.next;
}
