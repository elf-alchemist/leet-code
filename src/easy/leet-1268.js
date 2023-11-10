
//
// LeetCode challenge: 1268 - Solved
//

// You are given an array of strings products and a string `searchWord`.
// Design a system that suggests at most three product names from products after each character of `searchWord` is typed.
// Suggested products should have common prefix with `searchWord`.
// If there are more than three products with a common prefix return the three lexicographically minimums products.
// Return a list of lists of the suggested products after each character of `searchWord` is typed.

// Example 1:
//   Input:       products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord = "mouse"
//   Output:      [["mobile", "moneypot", "monitor"], ["mobile", "moneypot", "monitor"], ["mouse", "mousepad"], ["mouse", "mousepad"], ["mouse", "mousepad"]]
//   Explanation: products sorted lexicographically = ["mobile", "moneypot", "monitor", "mouse", "mousepad"].
//                After typing m and mo all products match and we show user["mobile", "moneypot", "monitor"].
//                After typing mou, mous and mouse the system suggests["mouse", "mousepad"].

// Example 2:
//   Input:       products = ["havana"], searchWord = "havana"
//   Output:      [["havana"], ["havana"], ["havana"], ["havana"], ["havana"], ["havana"]]
//   Explanation: The only word "havana" will be always suggested while typing the search word.

// Constraints:
//  `1 <= products.length <= 1000;`
//  `1 <= products[i].length <= 3000;`
//  `1 <= sum(products[i].length) <= 2 * 10^4`
//  All the strings of `products are unique.
//  `products[i]` consists of lowercase English letters.
//  `1 <= searchWord.length <= 1000`
//  `searchWord` consists of lowercase English letters.

import { deepStrictEqual } from 'node:assert';

/**
 * @param {Array<string>} products
 * @param {string} searchWord
 * @return {Array<Array<string>>}
 */
function suggestedProducts(products, searchWord) {
  const result = [];
  const sortedInput = products.sort();
  let prefix = '';

  for (let index = 0; index < searchWord.length; index++) {
    prefix += searchWord[index];
    const filteredInput = sortedInput.filter((word) => word.startsWith(prefix));
    result.push(filteredInput.slice(0, 3));
  }

  return result;
};

const firstInput = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const secondInput = ["havana"];

const firstSearch = "mouse";
const secondSearch = "havana";

deepStrictEqual(
  suggestedProducts(firstInput, firstSearch),
  [
    ["mobile", "moneypot", "monitor"],
    ["mobile", "moneypot", "monitor"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
    ["mouse", "mousepad"],
  ],
);
console.log('Successfully passed test 01.');

deepStrictEqual(
  suggestedProducts(secondInput, secondSearch),
  [
    ["havana"],
    ["havana"],
    ["havana"],
    ["havana"],
    ["havana"],
    ["havana"],
  ],
);
console.log('Successfully passed test 02.');
