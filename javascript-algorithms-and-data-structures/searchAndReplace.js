function myReplace(str, before, after) {
  // Create a regex pattern to match the 'before' word with word boundaries.
  const regex = new RegExp(`\\b${before}\\b`, "gi");

  // We can replace all occurrences of 'before' with 'after'...
  // ...adjusting the first character's case as needed.
  return str.replace(regex, (match) => {
    // Determine if 'before' starts with an uppercase letter.
    const isFirstCharUppercase = before[0] === before[0].toUpperCase();

    // Adjust the first character of 'after' based on 'before's case.
    const firstChar = isFirstCharUppercase ? after[0].toUpperCase() : after[0].toLowerCase();

    // Return 'after' with the adjusted first character and the rest.
    return firstChar + after.slice(1);
  });
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
