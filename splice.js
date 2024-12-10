const numbers = [1, 2, 3, 4, 5, 6, 7];
const getNumber = 4;
const findIndexNumber = numbers.findIndex((number) => number === getNumber);
console.log("Sebelum splice: ", numbers);
console.log("Angka " + getNumber +" Index ke: " + findIndexNumber);

console.log("Ambil angka: " + (findIndexNumber + 1));

numbers.splice(findIndexNumber, 3);
console.log("Setelah splice: ", numbers);
