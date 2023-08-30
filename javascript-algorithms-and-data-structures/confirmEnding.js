const confirmEnding = (str, target) => {
    // An alternative to endsWith(), uses the slice method and negative indexing...
    // ...to remove and store characters from the end of the str, of a length matching n ("n", "an", etc...)
    const ending = str.slice(-target.length);
  
    // Returns a boolean result of strict equality matching
    return ending === target;
  };
  
  console.log(confirmEnding("Bastian", "n"));
  