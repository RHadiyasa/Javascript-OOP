// PASS BY VALUE
// pass by value tidak merubah nilai asli ketika dilakukan perubahan

let age = 25;
let year = age;
year = 2023;
console.log(year);
console.log(age);

// PASS BY REFERENCE
// Nilai asli akan berubah, karena nilai yang diubah adalah referensi dari nilai aslinya.
const miya = {
  username: "Miya",
  damage: 2000,
};

const layla = miya;
layla.username = "Layla";

console.log(layla);
console.log(miya)
