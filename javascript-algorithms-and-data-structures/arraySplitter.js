const chunkArrayInGroups = (arr, size) => {
  // If given size is 0 or a negative value, throw an error
  if (size <= 0) {
    throw new Error("Size must be a positive value");
  }

  // Initialises an empty array to store the split arrays later
  let splitArr = [];

  // Iterates through the given array
  for (let i = 0; i < arr.length; i += size) {
    // Breaks the array down into sub-arrays and pushes them into the splitArr
    //
    // First iteration (i = 0):
    // arr.slice(0, 0 + 2) = ["a", "b"] (index 0 inclusive to 2 exclusive)
    // Second iteration (i = 2):
    // arr.slice(2, 2 + 2) = ["c", "d"] (index 2 inclusive to 4 exclusive)
    splitArr.push(arr.slice(i, i + size));
    // splitArr value per iteration:
    // [ ["a", "b"] ]
    // [ ["a", "b"], ["c", "d"] ]
  }
  return splitArr;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
