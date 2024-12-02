// 2625. Flatten Deeply Nested Array
// https://leetcode.com/problems/flatten-deeply-nested-array/

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  let res = []
  function r(arr, depth) {
    for (let item of arr) {
      if (Array.isArray(item) && depth < n) {
        r(item, depth + 1)
      } else {
        res.push(item)
      }
    }

    return res;
  }

  return r(arr, 0)
};