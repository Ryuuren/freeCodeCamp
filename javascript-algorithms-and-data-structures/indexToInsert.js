const getIndexToIns = (arr, num) => {
  // Initialise a variable to store the resulting index to insert
  let indexToIns = 0;
  // Iterates over the values of the array
  for (const index of arr) {
    // If the given num is higher than the current index...
    if (num > index) {
      // ...Increments the value of the index to insert
      indexToIns += 1;
    }
  }
  // Returns the final index to insert value
  return indexToIns;
};

console.log(getIndexToIns([40, 60], 50));
