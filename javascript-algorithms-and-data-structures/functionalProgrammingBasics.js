// Globally stored variable
let fixedValue = 4;

const incrementer = () => {
  return fixedValue + 1;
};

// Logs the global variable value, which is 4.
console.log(fixedValue);
// Logging this results in 5, which is fixedValue(4) + 1 = 5.
// Logging this multiple times will keep resulting in 5...
// ...as the function does NOT mutate the variable itself.
console.log(incrementer());
// Logs the global variable, which is STILL 4 after calling the function.
console.log(fixedValue);

// Calls the function and stores the result in a NEW variable, with the value of 5.
let newValue = incrementer();
// Logs the value of 5, as this new variable is the result of fixedValue + 1.
console.log(newValue);
// The original value of fixedValue is NEVER altered using these methods.
//
// Functional programming requires using PURE functions.
//
// Pure functions must not mutate (modify) things. By mutating things, there will be...
// ...side effects, which leads to bugs.
