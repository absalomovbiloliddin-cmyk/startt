// 4. Promise.all() dan foydalanish

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("1-soniya"), 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("2-soniya"), 2000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("3-soniya"), 3000);
});

Promise.all([p1, p2, p3]).then((results) => {
  console.log(results);
});
