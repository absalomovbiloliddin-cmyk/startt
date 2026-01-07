// 7. Retry mexanizmi

function retryPromise(promiseFn, retries = 3) {
  return new Promise((resolve, reject) => {
    promiseFn()
      .then(resolve)
      .catch((error) => {
        if (retries > 1) {
          retryPromise(promiseFn, retries - 1)
            .then(resolve)
            .catch(reject);
        } else {
          reject(error);
        }
      });
  });
}
