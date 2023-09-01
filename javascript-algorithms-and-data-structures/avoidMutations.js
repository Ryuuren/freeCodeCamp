// The global variable
let fixedValue = 4;

function incrementer() {
  // This doesn't change the value of fixedValue
return fixedValue + 1;

  // This method would change the value of fixedValue...
  // ...every time it is called.
  //
  // fixedValue = fixedValue +1
  //
  // In functional programming, we want to avoid...
  // ...mutations and side effects.

}

console.log(fixedValue);
incrementer();
console.log(fixedValue); // Still 4!