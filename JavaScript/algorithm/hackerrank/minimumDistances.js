// We define the distance between two array values as the number of indices between the two values.
// Given, find the minimum distance between any pair of equal elements in the array.If no such value exists, print -1.

// For example, if a = [3, 2, 1, 2, 3], there are two matching pairs of values: 3 and 2.
// The indices of the 3's are i = 0 and j = 4, so their distance is d[i, j] = |j - i| = 4.
// The indices of the 2's are i = 1 and j = 3, so their distance is d[i, j] = |j - 1| = 2.

// Function Description
// Complete the minimumDistances function in the editor below.
// It should return the minimum distance between any two matching elements.

// minimumDistances has the following parameter(s):
// a: an array of integers

// Input Format
// The first line contains an integer n, the size of array a.
// The second line contains n space - separated integers a[i].

// Constraints
// 1 <= n <= 10^3
// 1 <= a[i] <= 10^5

// Output Format
// Print a single integer denoting the minimum d[i,j] in a.
// If no such value exists, print -1.

// Sample Input
// 6
// 7 1 3 4 1 7

// Sample Output
// 3

// Explanation
// Here, we have two options:
// a[i] and a[4] are both 1, so d[1, 4] = | 1 - 4 | = 3.
// a[0] and a[5] are both 7, so d[0, 5] = | 0 - 5 | = 5.
// The answer is min(3,5) = 3.

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

// Complete the minimumDistances function below.
function minimumDistances(a) {
  const copyArr = [...a];
  const container = [];

  while (copyArr.length !== 0) {
    let index = 0;
    const baseNumber = copyArr[index];

    for (let i = 1; i < copyArr.length; i++) {
      if (copyArr[i] === baseNumber) {
        const distance = i - index;
        container.push(distance);
      }
    }

    copyArr.shift();
  }

  return container.length !== 0 ? Math.min.apply(null, container) : -1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const a = readLine()
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));

  let result = minimumDistances(a);

  ws.write(result + "\n");

  ws.end();
}
