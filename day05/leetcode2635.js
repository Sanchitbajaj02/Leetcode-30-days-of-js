// 2635. Apply Transform Over Each Element in Array
// URL -> https://leetcode.com/problems/apply-transform-over-each-element-in-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let output = arr.map(fn)

  return output;
};