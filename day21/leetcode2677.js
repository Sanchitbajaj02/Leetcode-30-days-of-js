// 2677. Chunk Array
// URL -> https://leetcode.com/problems/chunk-array/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let result = [];

  if (arr.length === 0) return [];
  let count = 0;

  let chunk = [];
  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);
    count++;

    if (count === size) {
      result.push(chunk);
      chunk = [];
      count = 0;
    }
  }

  if (chunk.length) result.push(chunk)

  return result;
};

// Alternative Solution

// /**
//  * @param {Array} arr
//  * @param {number} size
//  * @return {Array}
//  */
// var chunk = function (arr, size) {
//   if (arr.length < 1) return [];

//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr.slice(i, i + size));
//     i = i + size - 1
//   }

//   return res;
// };