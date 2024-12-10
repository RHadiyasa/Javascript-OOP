// Asynchronous simulation
function taskOne() {
  setTimeout(() => {
    console.log("Task One is done!");
  }, 3000);
}

function taskTwo() {
  setTimeout(() => {
    console.log("Task Two is done!");
  }, 1000);
}

function taskThree() {
  setTimeout(() => {
    console.log("Task Three is done!");
  }, 2000);
}

taskOne();
taskTwo();
taskThree();


// Output -> TaskThree, TaskOne, TaskTwo
// Gimana kalau butuh value dari fungsi lain dalam konteks async? 
// Jawabannya asycn callback