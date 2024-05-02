// PASS BY REFERENCE
const fruits = ["Mangga", "Jeruk", "Apel", "Nanas"];
const fruits2 = ["Dada", "Buahaha", "Anak Buah"];

const buah = fruits; // Tidak membuat array baru, tapi menunjuk array yang sudah ada.
buah[0] = "Durian";
console.log(buah);
console.log(fruits);

console.log("====== SPREAD OPERATOR ======");
// Spread operator untuk "melawan" pass by reference

const buahBaru = [...fruits]; // Kita bisa menggunakan operator spread untuk membuat array baru
// Kita juga bisa menambahkan array menggunakan spread operator
const addBuah = [...fruits, ...fruits2];
buahBaru[0] = "Naga";
console.log(buahBaru);
console.log(fruits);
console.log("========= ADD BUAH =========")
console.log(addBuah);
