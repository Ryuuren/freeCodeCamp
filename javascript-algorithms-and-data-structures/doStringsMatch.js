const mutation = (arr) => {
    // Converts both given strings to lowercase, to ease comparison
    const firstStr = arr[0].toLowerCase();
    const secondStr = arr[1].toLowerCase();
    
    // Loops over the character length of the second given string
    for (let i = 0; i < secondStr.length; i++) {
      // If the current character in the second string...
      // ...does NOT exist in the same index as the first...
      if (firstStr.indexOf(secondStr[i]) < 0) {
        // They don't match!
        return false; 
      }
    }
    // Both strings are a match in lowercase
    return true;
  }
  
  console.log(mutation(["hello", "hey"]));
  