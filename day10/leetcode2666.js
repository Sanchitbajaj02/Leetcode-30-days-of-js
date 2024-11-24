// 2666. Allow One Function Call
// URL -> https://leetcode.com/problems/allow-one-function-call/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let call = false;
  return function (...args) {
    if (!call) {
      call = true;
      return fn(...args);
    }
    return undefined;
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/


// Try this at your own risk
var onceAlternative = fn => (...args) => fn ? [fn(...args), fn = undefined][0] : fn;
