// Object mirip dengan Array
// Container yang memiliki banyak data.

// Pembuatan object hampir sama dengan array, bedanya menggunakan {}
/*Data di dalam Array tidak berhubungan satu dengan yang lain
Namun data di dalam object, itu merepresentasikan sebuah entitas secara utuh.
Dengan kata lain, berhubungan.
*/

const car = {
  // Mengakses data dalam object menggunakan properti
  brand: "Honda",
  carName: "Jazz",
  year: 2016,
};

console.log(car.carName);
console.log(car); // memanggil object.

// Mengakses properti di dalam object
console.log(car.brand + " " + car.carName + " Tahun " + car.year);

// Menggunakan bracket notation
// console.log(car['brand'])
console.log(`${car["brand"]} ${car["carName"]} Tahun ${car["year"]}`);

// Reassign value
car.carName = "City";
console.log(car.carName);

// Add property bisa langsung
car.kilometers = 20000;
console.log(car);

// Membuat object dengan contructor
const user2 = new Object();
console.log(user2);

// Sebelum ES6
const person = {
  firstName: "John",
  lastName: "Doe",
};
const user3 = Object.create(person);
user3.firstName = "John";
user3.gender = "Male"; // Assign new attribute
console.log("User3: ", user3.__proto__); // lastName tidak akan muncul -> karena tidak dianggap properti dari user3.
console.log("Gender user3: ", user3.gender);

// for (let key in user3) {
//   console.log(key);
// }
