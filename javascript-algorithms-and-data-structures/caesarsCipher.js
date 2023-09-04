function rot13(str) {
    // Use regex to target all uppercase and lowercase letters for replacement.
  return str.replace(/[A-Za-z]/g, (match) => {
    // If the letter is in the first half of the alphabet, increment by 13.
    // If the letter is in the second half of the alphabet, decrement by 13.
    const offset = match.toUpperCase() < "N" ? 13 : -13;

    // Use this offset to convert it to the corresponding decoded character.
    return String.fromCharCode(match.charCodeAt(0) + offset);
  });
}

console.log(rot13("SERR PBQR PNZC"));