// Manasa is out on a hike with friends.
// She finds a trail of stones with numbers on them.
// She starts following the trail and notices that
// any two consecutive stones' numbers differ by one of two values.
// Legend has it that there is a treasure trove at the end of the trail.
// If Manasa can guess the value of the last stone, the treasure will be hers.

// For example, assume she finds 2 stones and their differences are a = 2 or b = 3.
// We know she starts with a 0 stone not included in her count.
// The permutations of differences for the two stones would be [2,2], [2,3], [3,2] or [3,3].
// Looking at each scenario, stones might have [2,4], [2,5], [3,5] or [3,6] on them.
// The last stone might have any of 4, 5, or 6 on its face.

// Compute all possible numbers that might occur on the last stone given a starting stone with a 0 on it,
// a number of additional stones found, and the possible differences between consecutive stones.
// Order the list ascending.

// Function Description
// Complete the stones function in the editor below.
// It should return an array of integers representing all possible values of the last stone, sorted ascending.

// stones has the following parameter(s):
// n: an integer, the number of non - zero stones
// a: one possible integer difference
// b: another possible integer difference

// Input Format
// The first line contains an integer T, the number of test cases.

// Each test case contains 3 lines:
// - The first line contains n, the number of non - zero stones found.
// - The second line contains a, one possible difference
// - The third line contains b, the other possible difference.

// Constraints
// 1 <= T <= 10
// 1 <= n,a,b <= 10^3

// Output Format
// Space - separated list of numbers which are the possible values of the last stone in increasing order.

// Sample Input
// 2
// 3
// 1
// 2
// 4
// 10
// 100

// Sample Output
// 2 3 4
// 30 120 210 300

// Explanation
// With differences 1 and 2, all possible series for the first test case are given below:
// 0, 1, 2
// 0, 1, 3
// 0, 2, 3
// 0, 2, 4
// Hence the answer 2 3 4.

// With differences 10 and 100, all possible series for the second test case are the following:
// 0, 10, 20, 30
// 0, 10, 20, 120
// 0, 10, 110, 120
// 0, 10, 110, 210
// 0, 100, 110, 120
// 0, 100, 110, 210
// 0, 100, 200, 210
// 0, 100, 200, 300
// Hence the answer 30 120 210 300.

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

// Complete the stones function below.
function stones(n, a, b) {
  n = n - 1;

  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);
  const container = [minNum * n];
  const limit = maxNum * n;
  const diff = maxNum - minNum;

  while (container[container.length - 1] < limit) {
    container.push(container[container.length - 1] + diff);
  }

  return container;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const T = parseInt(readLine(), 10);

  for (let TItr = 0; TItr < T; TItr++) {
    const n = parseInt(readLine(), 10);

    const a = parseInt(readLine(), 10);

    const b = parseInt(readLine(), 10);

    let result = stones(n, a, b);

    ws.write(result.join(" ") + "\n");
  }

  ws.end();
}
