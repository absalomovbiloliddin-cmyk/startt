// 3. Promise zanjiri (chaining)

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

promise3
  .then((number) => {
    return number * 2;
  })
  .then((result) => {
    console.log(result);
  });
