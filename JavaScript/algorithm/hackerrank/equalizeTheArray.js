// Karl has an array of integers.He wants to reduce the array until all remaining elements are equal.
// Determine the minimum number of elements to delete to reach his goal.

// For example, if his array is arr = [1, 2, 3, 3],
// we see that he can delete the 2 elements 1 and 3 leaving arr = [2,2].
// He could also delete both twos and either the 1 or the 3, but that would take 3 deletions.
// The minimum number of deletions is 2.

// Function Description
// Complete the equalizeArray function in the editor below.
// It must return an integer that denotes the minimum number of deletions required.

// equalizeArray has the following parameter(s):
// arr: an array of integers

// Input Format
// The first line contains an integer n, the number of elements in arr.
// The next line contains n space - separated integers arr[i].

// Constraints
// 1 <= n <= 100
// 1 <= arr[i] <= 100

// Output Format
// Print a single integer that denotes the minimum number of elements Karl must delete for all elements in the array to be equal.

// Sample Input
// 5
// 3 3 2 1 3

// Sample Output
// 2

// Explanation
// Array arr = [3,3,2,1,3].
// If we delete arr[2] = 2 and arr[3] = 1, all of the elements in the resulting array,
// A`=[3,3,3], will be equal.
// Deleting these 2 elements is minimal.
// Our only other options would be to delete 4 elements to get an array of either [1] or [2].

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

// Complete the equalizeArray function below.
function equalizeArray(arr) {
  let tempItem = null;
  let count = 0;
  const container = [];
  const sortedArr = [...arr].sort(); // [1,2,3,3,3]
  const arrLength = arr.length;

  for (let i = 0; i < sortedArr.length; i++) {
    if (tempItem === null) {
      tempItem = sortedArr[i];
      count++;
    } else if (tempItem === sortedArr[i]) {
      count++;
    } else {
      container.push({ target: tempItem, count });
      tempItem = sortedArr[i];
      count = 1;
    }

    if (i === sortedArr.length - 1) {
      container.push({ target: tempItem, count });
    }
  }

  const maxCount = Math.max.apply(
    null,
    container.map(item => item.count)
  );

  return arrLength - maxCount;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  let result = equalizeArray(arr);

  ws.write(result + "\n");

  ws.end();
}
