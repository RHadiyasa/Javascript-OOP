// Asynchronous simulation
function taskOne(callback) {
  setTimeout(() => {
    console.log("Task One is done!");
    callback(); // Dijalankan setelah console.log
  }, 3000);
}

function taskTwo(callback) {
  setTimeout(() => {
    console.log("Task Two is done!");
    callback(); // Dijalankan setelah console.log
  }, 1000);
}

function taskThree(callback) {
  setTimeout(() => {
    console.log("Task Three is done!");
    callback(); // Dijalankan setelah console.log
  }, 2000);
}
// Taskone menerima parameter
// function callbackOne() {
//   // bisa diganti dengan arrow function
//   console.log("Callback called");
// }

taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      console.log("Callback called");
    });
  });
});

// Kapan kita menggunakan konsep ini?
// Ini berguna, ketika misalkan function asyncTwo membutuhkan value yang dihasilkan dari functiona asyncOne.
// Sehingga harus menunggu asyncOne selesai, baru asyncTwo di eksekusi.
