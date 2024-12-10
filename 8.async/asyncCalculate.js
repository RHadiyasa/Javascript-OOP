function asyncSum(a, b, callback) {
  setTimeout(() => {
    let result = 0;

    result = a + b;
    console.log("Sum is done");
    console.log(`${a} + ${b} = ${result}`);
    callback(result); // result menjadi parameter callback
    // return result; // gabutuh
  }, 2000);
}

function asycnDivide(a, b, callback) {
  setTimeout(() => {
    let result = 0;

    result = a / b;
    console.log("Pembagian Selesai");
    console.log(`${a} / ${b} = ${result}`);
    callback(result);
  }, 1000);
}

function asycnMultiply(a, b, callback) {
  setTimeout(() => {
    let result = 0;

    result = a * b;
    console.log("Perkalian Selesai");
    console.log(`${a} * ${b} = ${result}`);
    callback(result);
  }, 500);
}

function displayResult(result) {
  console.log("Hasil operasi: ", result);
}

let a = 10;
let b = 20;

// Jika terus2an akan menjadi Callback hell
asyncSum(a, b, (sumResult) => {
  asycnDivide(sumResult, 5, (divideResult) => {
    asycnMultiply(divideResult, 10, (multiplyResult) => {
      displayResult(multiplyResult);
    });
  });
}); // panggil callback
