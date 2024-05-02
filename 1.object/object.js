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
console.log(`${car['brand']} ${car['carName']} Tahun ${car['year']}`)

// Reassign value
car.carName = "City";
console.log(car.carName)

// Add property bisa langsung
car.kilometers = 20000;
console.log(car)


