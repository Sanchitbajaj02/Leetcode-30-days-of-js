// 2631. Group By
// URL -> https://leetcode.com/problems/group-by

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let obj = {};

  for (const item of this) {
    if (obj[fn(item)]) {
      obj[fn(item)].push(item);
    } else {
      obj[fn(item)] = [item];
    }
  }

  return obj
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/