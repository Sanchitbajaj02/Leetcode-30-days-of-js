// 2623. Memoize
// URL -> https://leetcode.com/problems/memoize/

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {}
  return function (...args) {
    const key = args.join(",")
    if ((key in cache)) {
      return cache[key];
    }
    const calc = fn(...args);
    cache[key] = calc;
    return calc;

  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/