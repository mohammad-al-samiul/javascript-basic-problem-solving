/*
Task 6: Array Reduction
Create an array of numbers. Write a function that uses the reduce method
 to calculate the sum of all even numbers in the array.
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function sumEvenNumbers(numbers) {
  return numbers.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}

console.log(sumEvenNumbers(numbers)); // Output: 20
