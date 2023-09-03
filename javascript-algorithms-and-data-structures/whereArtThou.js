const whatIsInAName = (collection, source) => {
  const result = [];

  // Outer loop that iterates through the collection
  for (let i = 0; i < collection.length; i++) {
    let isMatch = true;

    // Inner loop that loops through the keys of the given source object
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        // Check if the current collection item has the same key and value as the source object
        if (collection[i][key] !== source[key]) {
          isMatch = false;
          break; // Exit the inner loop early if there's no match for the current key
        }
      }
    }

    // If all keys in the source object match, add the item to the result array
    if (isMatch) {
      result.push(collection[i]);
    }
  }

  return result;
};

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

// A much more concise and functional method

function whatIsInAName(collection, source) {
  return collection.filter((item) =>
    Object.keys(source).every((key) => item.hasOwnProperty(key) && item[key] === source[key])
  );
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
