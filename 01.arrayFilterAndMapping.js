/*
Task 1: Array Filtering and Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. 
Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
*/
const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 22, gender: "female" },
  { name: "Mike", age: 30, gender: "male" },
  { name: "Anna", age: 28, gender: "female" },
];

function filterAndMapNames(people) {
  return people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

console.log(filterAndMapNames(people)); // Output: ["John", "Mike"]
