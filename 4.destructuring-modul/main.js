// const { add } = require("./math/add"); // import file yang berisi method dari file add.js
import add from "./math/add.js";
import multiply from "./math/multiply.js";
import outputResult from "./logging/output.js";
// const outputResult = require("./logging/output"); // Gaperlu kurung kurawal lagi kalo exportnya kaya output.js

let x = 5;
let y = 10;

const addResult = add(x, y);
const multiplyResult = multiply(x, y);
console.log(addResult);
console.log(multiplyResult);
console.log(outputResult(addResult));
console.log(outputResult(multiplyResult));



