/* Task 10: Advanced Sorting
 Create an array of objects representing students with 'name' and 'grades' properties.
 Write a function to sort the students by average grade in descending order.
 */
const students = [
  { name: "Alice", grades: [85, 90, 92] },
  { name: "Bob", grades: [75, 80, 78] },
  { name: "Charlie", grades: [88, 85, 91] },
];

function sortByAverageGrade(students) {
  return students.sort((a, b) => {
    const avgA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return avgB - avgA;
  });
}

console.log(sortByAverageGrade(students));
// Output: [
//   { name: "Charlie", grades: [88, 85, 91] },
//   { name: "Alice", grades: [85, 90, 92] },
//   { name: "Bob", grades: [75, 80, 78] }
// ]
