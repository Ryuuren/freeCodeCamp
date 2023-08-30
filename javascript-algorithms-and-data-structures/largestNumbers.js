const largestOfFour = (arr) => {
  // Initialize an empty array to store the highest numbers
  const largestNumbersArr = [];

  // Iterate through each sub-array
  for (let i = 0; i < arr.length; i++) {
    // Initialize largestNumber as the first value of each sub-array
    let largestNumber = arr[i][0];

    // Iterates through the remaining values in each sub-array
    for (let j = 1; j < arr[i].length; j++) {
      // Checks if the current sub-array value is higher than the current largestNumber
      if (arr[i][j] > largestNumber) {
        // If so, updates largestNumber to this higher value
        largestNumber = arr[i][j];
      }
    }

    // Stores the largestNumber of that sub-array as a value in the final array
    largestNumbersArr[i] = largestNumber;
  }

  // Return the final array with the highest number from each sub-array
  return largestNumbersArr;
};
