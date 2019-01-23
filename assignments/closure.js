// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let firstNum = 1;
let secondNum = 2;

function addNumbers() {
    let added = firstNum + secondNum;
    return added;
}

console.log(addNumbers());

// ==== Challenge 2: Create a counter function ====
startingCounter = 0;
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  return startingCounter += 1;
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(counter()); // Logs 1
console.log(counter()); // Logs 2
console.log(counter()); // Logs 3

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
