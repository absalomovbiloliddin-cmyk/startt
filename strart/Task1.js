// 1. Oddiy Promise yaratish

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Salom, dunyo!");
  }, 2000);
});

promise1.then((result) => {
  console.log(result);
});
