// Check if a string is a palindrome, considering only alphanumeric characters and ignoring case.
const palindrome = (str) => {
  // Convert the string to lowercase and remove non-alphanumeric characters.
  const filteredStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the filtered string by splitting it into characters, reversing the order, and joining them back.
  const reversedStr = filteredStr.split("").reverse().join("");

  // Compare the filtered string with its reversed version to determine if it's a palindrome.
  return filteredStr === reversedStr;
};

console.log(palindrome("Racecar"));
