// Bob has a strange counter.At the first second, it displays the number 3.
// Each second, the number displayed by the counter decrements by 1 until it reaches 1.

// The counter counts down in cycles.In next second,
// the timer resets to 2 x the initial number for the prior cycle and continues counting down.
// The diagram below shows the counter values for each time in the first three cycles:
// Find and print the value displayed by the counter at time t.

// Function Description
// Complete the strangeCounter function in the editor below.
// It should return the integer value displayed by the counter at time.

// strangeCounter has the following parameter(s):
// t: an integer

// Input Format
// A single integer denoting the value of t.

// Constraints
// 1 <= t <= 10^12

// Subtask
// 1 <= t <= 10^5 for 60% of the maximum score

// Output Format
// Print the value displayed by the strange counter at the given time t.

// Sample Input
// 4

// Sample Output
// 6

// Explanation
// Time t = 4 marks the beginning of the second cycle.
// It is double the number displayed at the beginning of the first cycle: 2 x 3 = 6.
// This is also shown in the diagram in the Problem Statement above.

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

// Complete the strangeCounter function below.
function strangeCounter(t) {
  let tracking = 3;

  while (t > tracking) {
    tracking = tracking * 2 + 3;
  }

  return tracking - (t - 1);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  let result = strangeCounter(t);

  ws.write(result + "\n");

  ws.end();
}
