// Watson likes to challenge Sherlock's math ability.
// He will provide a starting and ending value describing a range of integers.
// Sherlock must determine the number of square integers within that range, inclusive of the endpoints.

// Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.

// For example, the range is  a = 24 and b = 49, inclusive.
// There are three square integers in the range: 25, 36 and 49.

// Function Description
// Complete the squares function in the editor below.
// It should return an integer representing the number of square integers in the inclusive range from a to b.

// squares has the following parameter(s):
// a: an integer, the lower range boundary
// b: an integer, the uppere range boundary

// Input Format
// The first line contains q, the number of test cases.
// Each of the next q lines contains two space - separated integers denoting a and b,
// the starting and ending integers in the ranges.

// Constraints
// 1 <= q <= 100
// 1 <= a <= b <= 10^9

// Output Format
// For each test case, print the number of square integers in the range on a new line.

// Sample Input
// 2
// 3 9
// 17 24

// Sample Output
// 2
// 0

// Explanation
// Test Case #00: In range [3, 9], 4 and 9 are the two square integers.
// Test Case #01: In range [17, 24], there are no square integers.

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

// Complete the squares function below.
function squares(a, b) {
  const startSqrt =
    Math.sqrt(a) % 1 === 0
      ? parseInt(Math.sqrt(a)) - 1
      : parseInt(Math.sqrt(a));
  const endSqrt = parseInt(Math.sqrt(b));
  return endSqrt - startSqrt;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const ab = readLine().split(" ");

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    let result = squares(a, b);

    ws.write(result + "\n");
  }

  ws.end();
}
