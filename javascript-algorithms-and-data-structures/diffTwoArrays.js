const diffArray = (arr1, arr2) => {
  // Converts each array into JS sets, for faster lookups
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  // Initialises an array for storing the difference in arrays
  const difference = [];

  // Iterate through the first set
  for (const item of set1) {
    // If the current item is not in the other set...
    if (!set2.has(item)) {
      // ...we store it in the difference array.
      difference.push(item);
    }
  }

  // The same as above, but iterating through the second set
  for (const item of set2) {
    // If the current item is not in the other set...
    if (!set1.has(item)) {
      // ...we store it in the difference array as well.
      difference.push(item);
    }
  }

  // Returns the array of values that are different
  return difference;
};

// returns the difference of: ['pink wool', 'diorite']
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
