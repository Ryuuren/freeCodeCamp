// The global variable of a book list array
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

// Logs the global variable
console.log(bookList);

// Creates a shallow copy of the original bookList, which is then...
// ...modified and returned, with a new book added.
function add(bookList, bookName) {
  let newBookList = [...bookList];
  newBookList.push(bookName);
  return newBookList;
}

// Runs the function and returns the new variable list, with the new book added.
console.log(add(bookList, "Hello World, Vol 1"));

// Similarly to the above function, this creates a shallow copy of...
// ...the original bookList, but finds the bookName that is passed in and removes it...
// ...from this new list.
function remove(bookList, bookName) {
  let newBookList = [...bookList];
  const book_index = newBookList.indexOf(bookName);
  if (book_index >= 0) {
    newBookList.splice(book_index, 1);
    return newBookList;
  }
}

// Returns the bookList, minus the first book which has been removed.
console.log(remove(bookList, "The Hound of the Baskervilles"));
