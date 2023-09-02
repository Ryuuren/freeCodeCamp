// Creates a custom map function, that behaves like the built-in map function in JS.
//
// Adds a custom method to prototype of JS arrays. Any array can now use this custom method.
Array.prototype.myMap = function (callback) {
  // Initialises an empty array for storing the result of the myMap.
  const newArray = [];
  // For loop that runs over each index of the provided array.
  for (let i = 0; i < this.length; i++) {
    // Calls the callback on each iteration
    // this[i] = current element
    // i = index of current element
    // this = the original array given
    newArray.push(callback(this[i], i, this));
  }
  // Returns the final result of all iterations
  return newArray;
};

// Simple array for testing custom map function
const numbers = [1, 2, 3];

// Test 1: Map numbers to their squares
const squaredNumbers = numbers.myMap((num) => num * num);
console.log(squaredNumbers); // Expected output: [1, 4, 9]

// Test 2: Map numbers to strings
const numberStrings = numbers.myMap((num) => num.toString());
console.log(numberStrings); // Expected output: ["1", "2", "3"]

// Test 3: Map an empty array
const emptyArray = [].myMap((item) => item * 2);
console.log(emptyArray); // Expected output: []

// Test 4: Map an array of objects
const persons = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
const names = persons.myMap((person) => person.name);
console.log(names); // Expected output: ["Alice", "Bob"]

// Test 5: Map with index parameter
const indexAndValue = numbers.myMap((num, index) => `${index}: ${num}`);
console.log(indexAndValue); // Expected output: ["0: 1", "1: 2", "2: 3"]
