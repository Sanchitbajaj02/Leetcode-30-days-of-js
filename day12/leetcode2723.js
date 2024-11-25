// 2723. Add Two Promises
// URL -> https://leetcode.com/problems/add-two-promises

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  // Method 1.
  // const resolve1 = await promise1;
  // const resolve2 = await promise2;

  // return new Promise(resolve => {
  //   resolve(resolve1 + resolve2)
  // })


  // Method 2.
  // let [val1, val2] = await Promise.all([promise1, promise2]);
  // return val1 + val2;


  // Method 3.
  return Promise.all([promise1, promise2]).then(val => {
    return val.reduce((prev, curr) => prev + curr, 0);
  })
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/