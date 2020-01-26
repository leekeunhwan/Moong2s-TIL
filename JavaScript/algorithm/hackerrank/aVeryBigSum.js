// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below.
// It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// ar: an array of integers.
// Input Format

// The first line of the input consists of an integer n.
// The next line contains  space - separated integers contained in the array.

// Output Format

// Print the integer sum of the elements in the array.

// Constraints

// Sample Input

// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output

// 5000000015
// Note:

// The range of the 32 - bit integer is (-2^31) to (2^31-1) or [-2147483648, 2147483647].
// When we add several integer values, the resulting sum might exceed the above range.
// You might need to use long long int in C / C++ or long data type in Java to store such sums.

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

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  // 배열의 합을 더해주면 끝
  // 사실, number(long)의 범위를 넘기면 문자열로 변환하여 계산하는 등의
  // 시도를 해봤겠지만, 해당 문제는 number의 범위안에서 해결이 된다.
  return ar.reduce((a, b) => a + b, 0);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine(), 10);

  const ar = readLine()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10));

  let result = aVeryBigSum(ar);

  ws.write(result + "\n");

  ws.end();
}
