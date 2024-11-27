// 2721. Execute Asynchronous Functions in Parallel
// URL -> https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let res = [], count = 0;

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then(result => {
          res[i] = result;
          count++;

          if (count === functions.length) {
            resolve(res);
          }
        })
        .catch(error => {
          reject(error);
        });
    }

  })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */