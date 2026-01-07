// 5. Promise.race() dan foydalanish

const r1 = new Promise((resolve) => {
  setTimeout(() => resolve("Eng tez 1"), 1000);
});

const r2 = new Promise((resolve) => {
  setTimeout(() => resolve("Sekin 2"), 2000);
});

const r3 = new Promise((resolve) => {
  setTimeout(() => resolve("Sekin 3"), 3000);
});

Promise.race([r1, r2, r3]).then((result) => {
  console.log(result);
});
