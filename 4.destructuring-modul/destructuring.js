/*

Destructuring adalah fitur dalam JavaScript yang memungkinkan 
kita untuk dengan mudah mengekstrak nilai dari objek atau array
dan menetapkannya ke dalam variabel terpisah.

*/
const user = {
  username: "rhadiyasa",
  age: 25,
  job: "Trainer",
  address: {
    city: "Jakarta",
    street: "Jl. in aja dulu",
  },
};

// Cara melakukan destructuring
const { username, age: umur, job, address } = user; // age: umur adalah mengubah property age menjadi variable umur
const {
  address: { city, street },
} = user; // Nama harus sama dengan nama property di dalam object
console.log(username); // outputnya adalah username didalam object -> rhadiyasa

console.log(
  `username : ${username} |  age : ${umur} | job : ${job} | address : ${address.city}`
);
console.log(`Street : ${street} | City : ${city}`);

// Destructuring Array
console.log("\n-----DESTRUCTURING ARRAY-----");
const fruits = ["Leci", "Jeruk", "Mangga"];

const favFruit = fruits[1];
console.log(favFruit);

const [buah1, buah2, buah3] = fruits;
console.log(buah1);

// Kita bisa mengambil satu nilai saja di dalam array
const [firstFruit, ...restOfFruit] = fruits; // notasi ... hanya bisa digunakan terkahir, tidak bisa digunakan di depan
console.log(firstFruit, restOfFruit);
