// 2637. Promise Time Limit
// URL -> https://leetcode.com/problems/promise-time-limit/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    try {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject("Time Limit Exceeded"), t)
        fn(...args).then(resolve).catch(reject)
      })
    } catch (err) {
      return err;
    }
  }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// Alternative Solution
// return async function (...args) {
//   try {
//     return Promise.race([
//       fn(...args),
//       new Promise((_, re) => {
//         setTimeout(() => re("Time Limit Exceeded"), t)
//       })
//     ])
//   } catch (err) {
//     return err;
//   }
// }