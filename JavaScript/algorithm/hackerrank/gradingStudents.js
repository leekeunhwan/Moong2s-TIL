// HackerLand University has the following grading policy:

// Every student receives a in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.

// Sam is a professor at the university and likes to round each student's grade according to these rules:
// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

// For example grade = 84, will be rounded to 85 but grade = 29 will not
// be rounded because the rounding would result in a number that is less than 40.
// Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

// Function Description
// Complete the function gradingStudents in the editor below.
// It should return an integer array consisting of rounded grades.

// gradingStudents has the following parameter(s):
// grades: an array of integers representing grades before rounding

// Input Format
// The first line contains a single integer, n, the number of students.
// Each line i of the n subsequent lines contains a single integer, grades[i], denoting student i's grade.

// Constraints
// i <= n <= 60
// 0 <= grades[i] <= 100

// Output Format
// For each grades[i], print the rounded grade on a new line.

// Sample Input 0
// 4
// 73
// 67
// 38
// 33

// Sample Output 0
// 75
// 67
// 40
// 33

// Explanation 0

// Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75 - 73 < 3,
// the student's grade is rounded to 75.
// Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70 - 67 = 3,
// the grade will not be modified and the student's final grade is 67.
// Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40 - 38 < 3,
// the student's grade will be rounded to 40.
// Student 4 received a grade below 38, so the grade will not be modified and the student's final grade is 33.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
  // 최종 점수
  let finalGrades = [];
  // 조정전 점수를 확인해보면서
  for (let i = 0; i < grades.length; i++) {
    // 5의 배수로 올린 값 구하기
    const roundedNumber = Math.ceil(grades[i] / 5) * 5;
    // 차이값이 구하기 (올린 값 - 조정전 점수)
    const diff = roundedNumber - grades[i];
    // 차이점이 3 미만이면서, 올린 숫자가 40점 이상이라면
    if (diff < 3 && roundedNumber >= 40) {
      // 올린 점수를 최종 점수로 반영
      finalGrades.push(roundedNumber);
    } else {
      // 차이점이 3점이상이거나, 올린 숫자가 40점 미만이라면
      // 원래 점수를 최종점수에 반영
      finalGrades.push(grades[i]);
    }
  }
  // 정답 출력
  return finalGrades;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const gradesCount = parseInt(readLine().trim(), 10);

  let grades = [];

  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }

  const result = gradingStudents(grades);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
