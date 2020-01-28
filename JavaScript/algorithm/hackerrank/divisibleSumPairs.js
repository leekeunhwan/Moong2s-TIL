// You are given an array of n integers, ar = [ar[0], ar[1], ..., ar[n-1]], and a positive integer, k.
// Find and print the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

// For example, ar = [1,2,3,4,5,6] and k = 5.
// Our three pairs meeting the criteria are [1,4], [2,3] and [4,6].

// Function Description
// Complete the divisibleSumPairs function in the editor below.
// It should return the integer count of pairs meeting the criteria.
// divisibleSumPairs has the following parameter(s):
// n: the integer length of array ar
// ar: an array of integers
// k: the integer to divide the pair sum by

// Input Format
// The first line contains 2 space - separated integers, n and k.
// The second line contains n space - separated integers describing the values of ar[ar[0], ar[1], ..., ar[n-1]].

// Constraints
// 2 <= n <= 100
// 1 <= k <= 100
// 1 <= ar[i] <= 100

// Output Format
// Print the number of (i,j) pairs where i < j and a[i] + a[j] is evenly divisible by k.

// Sample Input
// 6 3
// 1 3 2 6 1 2

// Sample Output
// 5

// Explanation
// Here are the 5 valid pairs when k = 3:
// (0,2) => ar[0] + ar[2] = 1 + 2 = 3
// (0,5) => ar[0] + ar[5] = 1 + 2 = 3
// (1,3) => ar[1] + ar[3] = 3 + 6 = 9
// (2,4) => ar[2] + ar[4] = 2 + 1 = 3
// (4,5) => ar[4] + ar[5] = 1 + 2 = 3

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

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
  // 몇개가 나누어 지는 쌍인지 알기위한 변수
  let count = 0;
  // 파라미터 배열 조작 방지를 위한 복사본
  const copyArr = [...ar];
  // 복사한 배열의 사이즈가 0이 될때까지
  while (copyArr.length > 0) {
    // 0번째 요소가 기준
    const base = copyArr[0];
    // 0번째를 제외하고 나머지를 돌면서
    for (let i = 1; i < copyArr.length; i++) {
      // 기준인 숫자와 현재의 요소를 더한 걸 k로 나눴을때 나누어 떨어진다면
      if ((base + copyArr[i]) % k === 0) {
        // 짝이므로 숫자 업
        count++;
      }
    }
    // 기준 숫자 제거 (무한루프 방지 및 다음 턴)
    copyArr.splice(0, 1);
  }
  // 정답 노출
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const ar = readLine()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10));

  let result = divisibleSumPairs(n, k, ar);

  ws.write(result + "\n");

  ws.end();
}
