const repeatStringNumTimes = (str, num) => {
  // Handles edge case if num is 0 or less
  if (num <= 0) {
    return "";
  }

  // Initialises an empty string for storing the result
  let result = "";

  // Loops equal to given num, and concatenates the given str...
  // ...onto the result
  for (let i = 0; i < num; i++) {
    result += str;
  }

  // Returns the repeated str
  return result;
};

console.log(repeatStringNumTimes("abc", 3));
