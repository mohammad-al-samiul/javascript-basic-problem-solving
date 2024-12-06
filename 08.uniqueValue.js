/*
Task 8: Unique Values
Create an array of numbers with some duplicate values. Write a functionto filter out
 the duplicate values and return a new array with only unique numbers. Print the result.
*/
const numbers = [1, 2, 3, 4, 2, 5, 3, 6];

function getUniqueValues(arr) {
  return [...new Set(arr)];
}

console.log(getUniqueValues(numbers)); // Output: [1, 2, 3, 4, 5, 6]
