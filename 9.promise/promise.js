// Promise adalah sebuah object di Javascript untuk menangani proses asynchronous

const orderGofood = (order) => {
  return new Promise((resolve, reject) => {
    console.log("Pesen Gofood...");

    let menus = ["Pecel Lele", "Ayam Gepuk", "Kopi Susu"];

    setTimeout(() => {
      const findMenu = menus.findIndex((menu) => menu === order);

      if (findMenu >= 0) {
        console.log("Pesanan diproses...");

        setTimeout(() => {
          resolve("Gofood sampai");
        }, 4000);
      } else {
        reject(`Gagal, ${order} tidak tersedia`);
      }
    }, 1000);
  });
};

// orderGofood("Kopi")
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((failed) => {
//     console.error(failed);
//   })
//   .finally(() => {
//     console.log("Proses order selesai");
//   });

export default orderGofood;
