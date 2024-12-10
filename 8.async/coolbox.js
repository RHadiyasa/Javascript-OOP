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
  const put = (item, cbAvailableItem) => {
    setTimeout(() => {
      coolingBox.items.push(item);
      //   console.log(`Berhasil menyimpan ${item}`);
      //   console.log(`Berhasil menyimpan ${item.itemName}`);
      cbAvailableItem(`Berhasil menyimpan ${item.itemName}`);
    }, 500);
  };

  const check = (cbAvailableItem) => {
    setTimeout(() => {
      //   console.log(item.itemName);
      cbAvailableItem(coolingBox.items);
    }, 1000);
  };

  const take = (itemName, cbTakeItem) => {
    setTimeout(() => {
      const findProduct = coolingBox.items.findIndex(
        (item) => item.itemName === itemName
      );
      if (findProduct >= 0) {
        coolingBox.items.splice(findProduct, 1);
        cbTakeItem(`Mengambil ${itemName}`);
      }
    }, 1500);
  };

  callback(put, check, take);
}

process((putItem, checkItem, takeItem) => {
  putItem({ itemName: "Teh Pucuk" }, (availableItem) => {
    console.log(availableItem);
    checkItem((availableItem) => {
      console.log(availableItem);
      putItem({ itemName: "Air Mineral" }, (availableItem) => {
        console.log(availableItem);
        checkItem((availableItem) => {
          console.log(availableItem);
          putItem({ itemName: "Teh Botol" }, (availableItem) => {
            console.log(availableItem);
            checkItem((availableItem) => {
              console.log(availableItem);
              takeItem("Air Mineral", (itemTaked) => {
                console.log(itemTaked);
                checkItem((availableItem) => {
                  console.log(availableItem);
                });
              });
            });
          });
        });
      });
    });
  });
});
