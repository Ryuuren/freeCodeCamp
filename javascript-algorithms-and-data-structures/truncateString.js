const truncateString = (str, num) => {
  // Checks if the str is longer than the given num
  if (str.length > num) {
    // If so, truncates the str starting from the first...
    // ...character and ending at the given num.
    // Also concatenates an ellipsis (...) at the end.
    let result = str.substring(0, num).concat("...");
    return result;
  }
  // If the given num is shorter than the str length...
  // ...do nothing and return the given str
  return str;
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
