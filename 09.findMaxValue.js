/* Task 9: Find Maximum Value:
Write a function that takes an array of numbers and returns the maximum value.
 */
const nums = [10, 25, 7, 30, 15];

function findMaxValue(arr) {
  return Math.max(...arr);
}

console.log(findMaxValue(nums)); // Output: 30
