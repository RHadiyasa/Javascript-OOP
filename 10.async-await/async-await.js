import orderGofood from "../9.promise/promise.js";
// Await -> Memberitahu kalau misalkan ada proses async, sehingga menunggu prosesnya selesai
// Sama seperti menggunakan .then, tapi lebih singkat

// Memberikan keyword async di depan function

async function main() {
  // Mendeklarasikan sebuah function dengan proses async
  // await connectToDatabase(); // tunggu selesai, baru jalankan code selanjutnya
  //... fetch logic
  try {
    let result;

    result = await orderGofood("Ayam Gepuk"); // menggunakan await daripada menggunakan .then
    console.log("Hasil: ", result);
    
    // try {
    //   result = await orderGofood("Gepuk"); // menggunakan await daripada menggunakan .then
    //   console.log("Hasil: ", result);
    // } catch (error) {
    //   console.error("Error order pertama: ", error);
    // }

    // // Coba order lagi
    // try {
    //   result = await orderGofood("Kopi Susu");
    //   console.log("Hasil: ", result);
    // } catch (error) {
    //   console.error("Error order kedua: ", error);
    // }
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Proses selesai");
  }
}

main();
