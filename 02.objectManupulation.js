/*
Task 2: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. 
Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/
const books = [
  { title: "Book A", author: "Author A", year: 2000 },
  { title: "Book B", author: "Author B", year: 2005 },
  { title: "Book C", author: "Author C", year: 2010 },
];

function getBookTitles(books) {
  return books.map((book) => book.title);
}

console.log(getBookTitles(books)); // Output: ["Book A", "Book B", "Book C"]
