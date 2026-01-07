// 6. Ma'lumot yuklash simulyatsiyasi

function loadUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId % 2 === 0) {
        resolve("Success");
      } else {
        reject("Error");
      }
    }, 1000);
  });
}

loadUserData(2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

loadUserData(3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
