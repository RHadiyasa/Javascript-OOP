// Kasih tau ini dulu 
// const multiply = (a = 0, b = 0) => {
//     return a * b;
// }

// module.exports = { // export supaya bisa diimport
//     multiply,
// }

export default function multiply(a = 0, b = 0) { // gabisa pake arrow function
  return a * b;
}

// jangan lupa buat package.json

/**
 * secara default node.js menanggap .js adalah CommonJS, yang menggunakan sintaks "required".
 * Nah di ES6, ada modul baru yang namanya "export import", lebih sering digunakan di project nanti.
 * Makannya harus dikasih tau bahwa tipe nya adalah module di package.json
 */

// package.json
// {
//     "type":"module"
// }

// Dengan begini, kita bisa menulis .js dengan menggunakan ES6 