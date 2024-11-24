// 2626. Array Reduce Transformation
// URL -> https://leetcode.com/problems/array-reduce-transformation/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  nums.forEach(num => {
    init = fn(init, num);
  })

  return init;
};