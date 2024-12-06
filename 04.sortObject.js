/*
Task 4: Sorting Objects
Create an array of objects representing cars with properties like make, model, and year.
Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
*/
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2010 },
  { make: "Ford", model: "Focus", year: 2020 },
];

function sortCarsByYear(cars) {
  return cars.sort((a, b) => a.year - b.year);
}

console.log(sortCarsByYear(cars));
// Output: [
//   { make: "Honda", model: "Civic", year: 2010 },
//   { make: "Toyota", model: "Corolla", year: 2015 },
//   { make: "Ford", model: "Focus", year: 2020 }
// ]
