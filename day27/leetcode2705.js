// 2705. Compact Object
// URL -> https://leetcode.com/problems/compact-object/

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  function dfs(obj) {
    // no value check
    if (!obj) return false

    if (typeof obj !== 'object') return obj

    // array check
    if (Array.isArray(obj)) {
      const newArr = [];
      for (let item of obj) {
        const subRes = dfs(item);
        if (subRes) {
          newArr.push(subRes);
        }
      }

      return newArr;
    }

    // object check
    const newObj = {};

    for (const key in obj) {
      const subRes = dfs(obj[key])
      if (subRes) {
        newObj[key] = subRes;
      }
    }

    return newObj;
  }

  return dfs(obj);
};