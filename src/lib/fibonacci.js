/**
 * @param {number} length - Total length of the sequence result
 * @return {Array<number>} - Result of fibonacci computation
 */
export function fibonacciSequence(length) {
  const fib = [0, 1];
  let index = 2;

  while (index <= length) {
    const former = fib[index - 2] ?? 0;
    const latter = fib[index - 1] ?? 1;
    fib[index] = latter + former;
    index++;
  }

  return fib;
}

/**
 * @param {number} position - Index position of the computed result
 * @return {number} - Result of fibonacci computation
 */
export function fibonacciIndex(position) {
  /** @type {[number, number]} */
  const fib = [0, 1];
  let index = 0;
  let acc = 0;

  while (index < position) {
    acc = fib[0] + fib[1];
    fib[0] = fib[1];
    fib[1] = acc;
    index++;
  }

  return fib[0];
}
