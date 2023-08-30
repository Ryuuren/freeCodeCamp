const findLongestWordLength = (str) => {
  // Splits the input string into an array of strings, with spaces between
  const strArr = str.split(/\s+/);

  // Cleans the array by removing all non-alphanumeric characters
  // Also filters out empty strings resulting from removal of non-alphanumeric characters
  const cleanStrArr = strArr
    .map((string) => string.replace(/[^\w]/g, ""))
    .filter((string) => string.length > 0);

  // Initializes a variable for storing the longest string
  let longestStr = 0;

  // Iterates through the cleaned array and updates the longest string variable to the highest value
  for (let i = 0; i < cleanStrArr.length; i++) {
    if (cleanStrArr[i].length > longestStr) {
      longestStr = cleanStrArr[i].length;
    }
  }

  // Returns the length value of the longest string in the array
  return longestStr;
};

console.log(findLongestWordLength("The! @ quick brown fox jumped over the lazy dog"));
