// An integer d is a divisor of an integer n if the remainder of n % d = 0.
// Given an integer, for each digit that makes up the integer determine whether it is a divisor.
// Count the number of divisors occurring within the integer.

// Note: Each digit is considered to be unique,
// so each occurrence of the same digit should be counted
// (e.g.for n = 111, 1 is a divisor of 111 each time it occurs so the answer is 3).

// Function Description
// Complete the findDigits function in the editor below.
// It should return an integer representing the number of digits of d that are divisors of d.

// findDigits has the following parameter(s):
// n: an integer to analyze

// Input Format
// The first line is an integer, t, indicating the number of test cases.
// The t subsequent lines each contain an integer, n.

// Constraints
// 1 <= t <= 15
// 0 < n < 10^9

// Output Format
// For every test case, count the number of digits in n that are divisors of n.
// Print each answer on a new line.

// Sample Input
// 2
// 12
// 1012

// Sample Output
// 2
// 3

// Explanation
// The number 12 is broken into two digits, 1 and 2.
// When 12 is divided by either of those two digits, the remainder is 0 so they are both divisors.

// The number 1012 is broken into four digits, 1, 0, 1, and 2.
// 1012 is evenly divisible by its digits 1, 1, and 2,
// but it is not divisible by 0 as division by zero is undefined.

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

// Complete the findDigits function below.
function findDigits(n) {
  // 먼저 제수를 카운팅할 변수를 선언한다.
  let count = 0;
  // 숫자를 문자열로 바꾼뒤 배열로 만든다.
  const nStrArr = Array.from(n.toString());
  // 배열을 순회하면서
  nStrArr.forEach(item => {
    // 해당요소가 주어진 숫자를 나눴을때 나머지가 0인 제수인지 확인하여
    if (n % item === 0) {
      // 맞으면 카운팅
      count++;
    }
  });
  // 정답 출력
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    let result = findDigits(n);

    ws.write(result + "\n");
  }

  ws.end();
}
