// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix is shown below:

// 1 2 3
// 4 5 6
// 9 8 9

// The left - to - right diagonal = 1 + 5 + 9 = 15.
// The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

// Function description

// Complete the diagonalDifference function in the editor below.
// It must return an integer representing the absolute diagonal difference.

// diagonalDifference takes the following parameter:

// arr: an array of integers.
// Input Format

// The first line contains a single integer, n, the number of rows and columns in the matrix arr.
// Each of the next n lines describes a row, arr[i], and consists of n space - separated integers arr[i][j].

// Constraints
// -100 <= arr[i][j] <= 100

// Output Format
// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 - 12

// Sample Output
// 15

// Explanation
// The primary diagonal is:
// 11
//    5
//     - 12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:
//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19

// Difference: | 4 - 19 | = 15

// Note: | x | is the absolute value of x

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // 대각선1
  let diagonal1 = 0;
  // 대각선2
  let diagonal2 = 0;

  // 배열을 돌면서 대각선에 해당하는 값하나씩 더해준다.
  for (let i = 1; i <= arr.length; i++) {
    // 대각선 1의 경우 [0][0], [1][1], [2][2]...
    diagonal1 += arr[i - 1][i - 1];
    // 대각선 2의 경우 [0][배열사이즈-1]. [1][배열사이즈-2]....;
    diagonal2 += arr[i - 1][arr[i - 1].length - i];
  }

  // 어차피 정답은 숫자의 차이일 뿐, 연산이 아니기에
  // 둘중 제일 큰수를 앞으로, 제일 작은수를 뒤로 해서
  // 정답 도출
  return Math.max(diagonal1, diagonal2) - Math.min(diagonal1, diagonal2);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map(arrTemp => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
