// A Discrete Mathematics professor has a class of students.
// Frustrated with their lack of discipline, he decides to cancel class
// if fewer than some number of students are present when class starts.
// Arrival times go from on time(arrivalTime <= 0) to arrived late(arrivalTime > 0).
// Given the arrival time of each student and a threshhold number of attendees, determine if the class is canceled.

// Input Format
// The first line of input contains, the number of test cases.

// Each test case consists of two lines.
// The first line has two space - separated integers,
// n and k, the number of students(size of a) and the cancellation threshold.
// The second line contains n space - separated integers(a[1], a[2], ..., a[n]) describing the arrival times for each student.
// Note: Non - positive arrival times(a[i] <= 0) indicate the student arrived early or on time;
// positive arrival times(a[i] > 0) indicate the student arrived a[i] minutes late.

// For example, there are n = 6 students who arrive at times a = [ -1, -1, 0, 0, 1, 1 ].
// Four are there on time, and two arrive late.
// If there must be k = 4 for class to go on, in this case the class will continue.
// If there must be k = 5, then class is cancelled.

// Function Description
// Complete the angryProfessor function in the editor below.
// It must return YES if class is cancelled, or NO otherwise.
// angryProfessor has the following parameter(s):
// k: the threshold number of students
// a: an array of integers representing arrival times

// Constraints
// 1 <= t <= 10
// 1 <= n <= 1000
// 1 <= k <= n
// -100 <= a[i] <= 100, where i in [1, ...n]

// Output Format
// For each test case, print the word YES if the class is canceled or NO if it is not.

// Note
// If a student arrives exactly on time (a[i] = 0),
// the student is considered to have entered before the class started.

// Sample Input
// 2
// 4 3
// - 1 - 3 4 2
// 4 2
// 0 - 1 2 1

// Sample Output
// YES
// NO

// Explanation
// For the first test case, k = 3.
// The professor wants at least 3 students in attendance,
// but only 2 have arrived on time(-3 and - 1) so the class is cancelled.

// For the second test case, k = 2.
// The professor wants at least 2 students in attendance,
// and there are 2 who have arrived on time (0 and -1) so the class is not cancelled.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the angryProfessor function below.
function angryProfessor(k, a) {
  // 정시에 도착한 학생을 구해놓고
  const passedStudent = a.filter(item => item <= 0);
  // 그 학생이 정해진 limit보다 크거나 같으면
  if (passedStudent.length >= k) {
    // 수업은 정상진행
    return "NO";
  } else {
    // 수업 취소
    return "YES";
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const nk = readLine().split(" ");

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const a = readLine()
      .split(" ")
      .map(aTemp => parseInt(aTemp, 10));

    let result = angryProfessor(k, a);

    ws.write(result + "\n");
  }

  ws.end();
}
