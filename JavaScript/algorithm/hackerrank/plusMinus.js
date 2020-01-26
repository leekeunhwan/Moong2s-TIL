// Given an array of integers, calculate the fractions of its elements
// that are positive, negative, and are zeros.
// Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems.
// The test cases are scaled to six decimal places,
// though answers with absolute error of up to (10^-4) are acceptable.

// For example, given the array arr=[1,1,0,-1,-1] there are 5 elements,
// two positive, two negative and one zero.
// Their ratios would be 2/5 = 0.400000, 2/5 = 0.400000, and 1/5 = 0.200000.
// It should be printed as
// 0.400000
// 0.400000
// 0.200000

// Function Description
// Complete the plusMinus function in the editor below.
// It should print out the ratio of positive, negative and zero items in the array,
// each on a separate line rounded to six decimals.
// plusMinus has the following parameter(s):
// arr: an array of integers

// Input Format
// The first line contains an integer, n, denoting the size of the array.
// The second line contains n space - separated integers describing an array of numbers.
// arr(arr[0], arr[1], arr[2], ..., arr[n-1])

// Constraints
// 0 < n <= 100
// -100 <= arr[i] <= 100

// Output Format
// You must print the following 3 lines:
// A decimal representing of the fraction of positive numbers in the array compared to its size.
// A decimal representing of the fraction of negative numbers in the array compared to its size.
// A decimal representing of the fraction of zeros in the array compared to its size.

// Sample Input
// 6
// -4 3 -9 0 4 1

// Sample Output
// 0.500000
// 0.333333
// 0.166667

// Explanation
// There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
// The proportions of occurrence are positive: 3/6 = 0.500000, negative: 2/6 = 0.333333 and zeros: 1/6 = 0.166667.

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  // 양수
  let positive = [];
  // 음수
  let negative = [];
  // 제로
  let zero = [];

  // 주어진 배열을 돌면서
  for (let i = 0; i < arr.length; i++) {
    // 배열의 요소가 양수면
    if (arr[i] > 0) {
      // 양수 배열에 집어넣기
      positive.push(arr[i]);
      // 배열의 요소가 음수면
    } else if (arr[i] < 0) {
      // 음수 배열에 집어넣기
      negative.push(arr[i]);
      // 배열의 요소가 제로면
    } else {
      // 제로 배열에 집어넣기
      zero.push(arr[i]);
    }
  }

  // 양수의 비율은 양수의 갯수를 전체의 배열 수로 나눈다음 소숫점 6자리로 잘라두기
  positive = (positive.length / arr.length).toFixed(6);
  // 음수의 비율은 음수의 갯수를 전체의 배열 수로 나눈다음 소숫점 6자리로 잘라두기
  negative = (negative.length / arr.length).toFixed(6);
  // 제로의 비율은 제로의 갯수를 전체의 배열 수로 나눈다음 소숫점 6자리로 잘라두기
  zero = (zero.length / arr.length).toFixed(6);

  // 정답 출력
  console.log(positive);
  console.log(negative);
  console.log(zero);
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
