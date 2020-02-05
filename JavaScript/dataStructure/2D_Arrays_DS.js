// Given a 6 * 6 2D Array, arr:

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:

// a b c
//   d
// e f g
// There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values.
// Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

// For example, given the 2D array:

// -9 -9 -9  1  1  1
//  0 -9  0  4  3  2
// -9 -9 -9  1  2  3
//  0  0  8  6  6  0
//  0  0  0 -2  0  0
//  0  0  1  2  4  0
// We calculate the following 16 hourglass values:

// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
//  9, 17, 25, 18

// Our highest hourglass value is 28 from the hourglass:
// 0 4 3
//   1
// 8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

// Function Description
// Complete the function hourglassSum in the editor below.
// It should return an integer, the maximum hourglass sum in the array.
// hourglassSum has the following parameter(s):
// arr: an array of integers

// Input Format
// Each of the 6 lines of inputs arr[i] contains 6 space - separated integers arr[i][j].

// Constraints
// -9 <= arr[i][j] <= 9
// 0 <= i,j <= 5

// Output Format
// Print the largest(maximum) hourglass sum found in arr.

// Sample Input

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// Sample Output
// 19

// The hourglass with the maximum sum(19) is:

// 2 4 4
//   2
// 1 2 4

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

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  // 제일 큰 합을 체크하기 위한 변수
  let maxSum = null;
  // let maxSum:number = null;
  // 2차원 배열이다. 행
  for (let i = 0; i < arr.length; i++) {
    // 열
    for (let j = 0; j < arr.length; j++) {
      // arr[i - 1][j - 1]와 arr[i + 1][j + 1]가 존재해야하므로
      // 존재하지 않는 외각의 케이스는 제외한다.
      if (i !== arr.length - 1 && i !== 0 && j !== arr.length - 1 && j !== 0) {
        // 합을 구한다.
        const hourglassSum =
          arr[i - 1][j - 1] +
          arr[i - 1][j] +
          arr[i - 1][j + 1] +
          arr[i][j] +
          arr[i + 1][j - 1] +
          arr[i + 1][j] +
          arr[i + 1][j + 1];

        // 만약 초기값으로 null이 들어간 첫번째 케이스거나 기존의 합이 지금의 합보다 작다면
        // 지금의 합으로 교체
        if (hourglassSum > maxSum || maxSum === null) maxSum = hourglassSum;
      }
    }
  }
  // 정답 출력
  return maxSum;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map(arrTemp => parseInt(arrTemp, 10));
  }

  let result = hourglassSum(arr);

  ws.write(result + "\n");

  ws.end();
}
