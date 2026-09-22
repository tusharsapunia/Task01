const students = [
  { id: 1, name: "Rahul", marks: 82 },
  { id: 2, name: "Priya", marks: 45 },
  { id: 3, name: "Aman", marks: 91 },
  { id: 4, name: "Neha", marks: 67 },
  { id: 5, name: "Karan", marks: 38 },
];
const totalStudents = students.length;
// console.log(totalStudents);

const totalmarks = students.reduce((total, student) => {
  return (total += student.marks);
}, 0);
// console.log(totalmarks);

const averageMarks = totalmarks / totalStudents;
// console.log(averageMarks);

const pass = students.filter((curl) => {
  if (curl.marks > 50) {
    return `${curl.name} : ${curl.marks}`;
  }
});

// console.log([...students]);
const sort = [...students].sort((a, b) => {
  return b.marks - a.marks;
});
const Toper = sort[0];

console.log(`Total Students - ${totalStudents}`);
console.log(`Average Marks - ${averageMarks}`);
console.log(`Pass students Above 50 \n`);
pass.map((student) => {
  console.log(`${student.name} : ${student.marks}`);
});

console.log(`Toper -`);
console.log(`${Toper.name} : ${Toper.marks}`);
console.log("sort Students");
sort.map((curl) => {
  console.log(curl.name);
});
