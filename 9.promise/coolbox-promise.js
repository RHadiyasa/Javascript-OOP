class CoolingBox {
  constructor() {
    this.items = [];
  }
}

const item = {
  name: "Botol",
};

function process(callback) {
  const coolingBox = new CoolingBox();

  // function untuk menaruh barang/items
  const put = (item) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        coolingBox.items.push(item);
        //   console.log(`Berhasil menyimpan ${item}`);
        //   console.log(`Berhasil menyimpan ${item.itemName}`);
        resolve(`Berhasil menyimpan ${item.itemName}`);
      }, 1000);
    });
  };

  const check = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        //   console.log(item.itemName);
        resolve(coolingBox.items);
      }, 1500);
    });
  };

  const take = (itemName) => {
    console.log(`Mengambil ${itemName}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const findProduct = coolingBox.items.findIndex(
          (item) => item.itemName === itemName
        );
        if (findProduct >= 0) {
          coolingBox.items.splice(findProduct, 1);
          resolve(`Berhasil mengambil ${itemName}`);
        } else {
          reject(`${itemName} tidak ditemukan`);
        }
      }, 2500);
    });
  };

  callback(put, check, take);
}

process((putItem, checkItem, takeItem) => {
  putItem({ itemName: "Teh Pucuk" })
    .then((availableItem) => {
      console.log(availableItem);
      return checkItem();
    })
    .then((availableItem) => {
      console.log(availableItem);
      return putItem({ itemName: "Air Mineral" });
    })
    .then((availableItem) => {
      console.log(availableItem);
      return checkItem();
    })
    .then((availableItem) => {
      console.log(availableItem);
      return putItem({ itemName: "Lee Mineral" });
    })
    .then((availableItem) => {
      console.log(availableItem);
      return checkItem();
    })
    .then((availableItem) => {
      console.log(availableItem);
      return takeItem("Lee Mineral");
    })
    .then((itemTaked) => {
      console.log(itemTaked);
      return checkItem();
    })
    .then((availableItem) => {
      console.log(availableItem);
    })
    .catch((error) => {
      console.error(error);
    });
});

// process((putItem, checkItem, takeItem) => {
//   putItem({ itemName: "Teh Pucuk" }, (availableItem) => {
//     console.log(availableItem);
//     checkItem((availableItem) => {
//       console.log(availableItem);
//       putItem({ itemName: "Air Mineral" }, (availableItem) => {
//         console.log(availableItem);
//         checkItem((availableItem) => {
//           console.log(availableItem);
//           putItem({ itemName: "Teh Botol" }, (availableItem) => {
//             console.log(availableItem);
//             checkItem((availableItem) => {
//               console.log(availableItem);
//               takeItem("Air Mineral", (itemTaked) => {
//                 console.log(itemTaked);
//                 checkItem((availableItem) => {
//                   console.log(availableItem);
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });
