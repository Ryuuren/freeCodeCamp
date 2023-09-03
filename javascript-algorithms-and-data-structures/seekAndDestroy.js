const destroyer = (arr, ...args) => {
  // We can use rest parameter syntax to capture everything beyond the initial array, separating our array from the destroyers.

  // We can then filter and create a new array with elements that do not match the args.
  return arr.filter((element) => !args.includes(element));
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// My initial solution, without the spread operator.
function destroyer1(arr) {
  // We first convert the arguments object to an array, and remove the first element, the initial array.
  const args = Array.from(arguments).slice(1);

  // We then filter and create a new array, with elements that do not match the args
  return arr.filter((element) => !args.includes(element));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
