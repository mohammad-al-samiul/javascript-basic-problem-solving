/*
Task 5: Find and Modify
Write a function that searches an array of objects for a specific person by name.
 If found, modify their age property. Print the updated array.
*/

const peopleList = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Mike", age: 30 },
];

function updatePersonAge(people, name, newAge) {
  people.forEach((person) => {
    if (person.name === name) {
      person.age = newAge;
    }
  });
  return people;
}

console.log(updatePersonAge(peopleList, "Jane", 28));
// Output: [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 28 },
//   { name: "Mike", age: 30 }
// ]
