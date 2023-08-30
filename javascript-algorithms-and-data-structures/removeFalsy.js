const bouncer = (arr) => {
    // Initialise an array to hold any truthy values
    const truthyArr = [];
    // Iterates over array values
    for (let i = 0; i < arr.length; i++) {
      // If current value [i] is truthy, push onto the truthyArr
      if (arr[i]) truthyArr.push(arr[i]);
    }
    // Return all truthy values that remain
    return truthyArr
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));