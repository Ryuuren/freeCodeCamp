function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Check if the next character is not consecutive
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
      // Return the missing letter by incrementing the character code
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  // Return undefined if no missing letter is found
  return undefined;
}

console.log(fearNotLetter("abce"));
