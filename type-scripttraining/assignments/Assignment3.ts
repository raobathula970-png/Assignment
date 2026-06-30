let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];

// Add 10 marks to each student and store in another array
let updatedMarks: number[] = [
  marks[0]! += 10,
  marks[1]! += 10,
  marks[2]! += 10
];

// Calculate average
let total: number = updatedMarks[0]! + updatedMarks[1]! + updatedMarks[2]!;
let average: number = total / updatedMarks.length;

// Output
console.log("Updated Marks:");
console.log(studentNames[0] + ": " + updatedMarks[0]);
console.log(studentNames[1] + ": " + updatedMarks[1]);
console.log(studentNames[2] + ": " + updatedMarks[2]);
console.log("Average Marks: " + average);
