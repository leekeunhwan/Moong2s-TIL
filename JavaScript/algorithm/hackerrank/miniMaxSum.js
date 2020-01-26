// Given five positive integers,
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space - separated long integers.

// For example, arr=[1,3,5,7,9] .Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24.

// We would print
// 16 24

// Function Description
// Complete the miniMaxSum function in the editor below.
// It should print two space - separated integers on one line:
// the minimum sum and the maximum sum of 4 of 5 elements.

// miniMaxSum has the following parameter(s):
// arr: an array of 5 integers

// Input Format
// A single line of five space - separated integers.

// Constraints
// 1 <= arr[i] <= 10^9

// Output Format
// Print two space - separated long integers denoting the respective minimum and maximum values
// that can be calculated by summing exactly four of the five integers.
// (The output can be greater than a 32 bit integer.)

// Sample Input
// 1 2 3 4 5

// Sample Output
// 10 14

// Explanation
// Our initial numbers are 1, 2, 3, 4, and 5.
// We can calculate the following sums using four of the five integers:

// If we sum everything except 1, our sum is 2 + 3 + 4 + 5 = 14.
// If we sum everything except 2, our sum is 1 + 3 + 4 + 5 = 13.
// If we sum everything except 3, our sum is 1 + 2 + 4 + 5 = 12.
// If we sum everything except 4, our sum is 1 + 2 + 3 + 5 = 11.
// If we sum everything except 5, our sum is 1 + 2 + 3 + 4 = 10.
// Hints: Beware of integer overflow! Use 64 - bit Integer.

"use strict";

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  // 최소합의 기본값은 최대값으로 세팅
  let miniSum = arr.reduce((a, b) => a + b, 0);
  // 최대합의 기본값은 0으로 세팅
  let maxSum = 0;
  // 배열을 돌면서
  for (let i = 0; i < arr.length; i++) {
    // 임시배열 (원본배열 훼손 방지)
    const tempArr = [...arr];
    // 해당 요소 제거
    tempArr.splice(i, 1);
    // 임시합(제거후 합)을 구함
    const tempSum = tempArr.reduce((a, b) => a + b, 0);
    // 만약 최소합보다 임시합이 작다면 최소합은 임시합
    if (miniSum > tempSum) miniSum = tempSum;
    // 만약 최대합보다 임시합이 크다면 최대합은 임시합
    if (maxSum < tempSum) maxSum = tempSum;
  }
  // 정답 도출
  console.log(`${miniSum} ${maxSum}`);
}

function main() {
  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
