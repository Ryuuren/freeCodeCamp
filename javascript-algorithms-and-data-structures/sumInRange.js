// Define a function named sumAll that takes an array arr as its parameter.
function sumAll(arr) {
  // Sort the elements of the arr array in ascending order.
  arr.sort((a, b) => a - b);

  // Initialize a variable result to store the sum of numbers.
  let result = 0;

  // Iterate through a range of numbers from arr[0] to arr[1] (inclusive).
  for (let i = arr[0]; i <= arr[1]; i++) {
    // Add each number within the range to the result.
    result += i;
  }

  // Return the final result.
  return result;
}

// Call the sumAll function with the input array [1, 4] and log the result to the console.
console.log(sumAll([1, 4]));
