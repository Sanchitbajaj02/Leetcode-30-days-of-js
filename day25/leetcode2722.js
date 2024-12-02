// 2722. Join Two Arrays by ID
// URL -> https://leetcode.com/problems/join-two-arrays-by-id/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const joined = [...arr1, ...arr2]

  let map = {}

  for (let obj of joined) {
    let id = obj.id

    if (map.hasOwnProperty(id)) {
      map[id] = { ...map[id], ...obj }
    } else {
      map[id] = obj
    }
  }

  return Object.values(map)
};