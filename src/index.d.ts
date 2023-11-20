import '@total-typescript/ts-reset';

export declare class ListNode {
  constructor(val: number | undefined, next: ListNode | null | undefined);
  val: number;
  next: ListNode | null;
}

export declare function listToArray(head: ListNode | null): number[];

export declare function listFromArray(array: Array<number>): ListNode;
