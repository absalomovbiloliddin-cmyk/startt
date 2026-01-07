// 2. Promise bilan xato qaytarish

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Xato yuz berdi!");
  }, 1000);
});

promise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
