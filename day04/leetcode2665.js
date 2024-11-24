// 2665. Counter II
// URL -> https://leetcode.com/problems/counter-ii/

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  var preset = init;

  return {
    increment: function () {
      return ++init;
    },
    decrement: function () {
      return --init;
    },
    reset: function () {
      return init = preset
    }
  }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/