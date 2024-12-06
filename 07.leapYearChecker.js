/*
Task 7: Leap Year Checker
Write a function that determines whether a given year is a leap year.
Example: Happy New Year
*/
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "Happy Leap Year!";
  }
  return "Not a Leap Year.";
}

console.log(isLeapYear(2024)); // Output: Happy Leap Year!
console.log(isLeapYear(2023)); // Output: Not a Leap Year.
