// John Watson knows of an operation called a right circular rotation on an array of integers.
// One rotation operation moves the last array element to the first position and shifts all remaining elements right one.
// To test Sherlock's abilities, Watson provides Sherlock with an array of integers.
// Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

// For each array, perform a number of right circular rotations and return the value of the element at a given index.
// For example, array, number of rotations, k = 2 and indices to check, m = [1, 2].
// First we perform the two rotations:
// [ 3, 4, 5 ] -> [ 5, 3, 4 ] -> [ 4, 5, 3 ]
// Now return the values from the zero - based indices 1 and 2 as indicated in the m array.

// Function Description
// Complete the circularArrayRotation function in the editor below.
// It should return an array of integers representing the values at the specified indices.
// circularArrayRotation has the following parameter(s):
// a: an array of integers to rotate
// k: an integer, the rotation count
// queries: an array of integers, the indices to report

// Input Format
// The first line contains 3 space - separated integers, n, k, and q,
// the number of elements in the integer array, the rotation count and the number of queries.
// The second line contains n space - separated integers, where each integer i describes array element a[i] (where 0 <= i < n).
// Each of the q subsequent lines contains a single integer denoting, the index of the element to return from.

// Constraints
// 1 <= n <= 10^5
// 1 <= a[i] <= 10^5
// 1 <= k <= 10^5
// 1 <= q <= 500
// 0 <= m < n

// Output Format
// For each query, print the value of the element at index m of the rotated array on a new line.

// Sample Input 0
// 3 2 3
// 1 2 3
// 0
// 1
// 2

// Sample Output 0
// 2
// 3
// 1

// Explanation 0
// After the first rotation, the array becomes [3, 1, 2].
// After the second(and final) rotation, the array becomes [2, 3, 1].
// Let's refer to the array's final state as array b = [2, 3, 1].
// For each query, we just have to print the value of b[m] on a new line:

// m = 0, b[0] = 2.
// m = 1, b[1] = 3.
// m = 2, b[2] = 1.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the circularArrayRotation function below.
function circularArrayRotation(a, k, queries) {
  // 원본배열을 보존하기 위해 복사
  const copyArr = [...a];
  // k라고 하면 헷갈릴것 같아서 로테이트 카운트라고 변수 재선언
  let rotateCount = k;
  // 로테이트 횟수가 0이 될때까지
  while (rotateCount > 0) {
    // 마지막 숫자를 빼서
    const tempPop = copyArr.pop();
    // 배열에 앞에 추가
    copyArr.unshift(tempPop);
    // 로테이트 했으니 횟수 제거
    rotateCount--;
  }
  // 쿼리 배열의 요소가 로테이트한 배열의 인덱스이기에
  // 정답 출력
  return queries.map(item => copyArr[item]);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nkq = readLine().split(" ");

  const n = parseInt(nkq[0], 10);

  const k = parseInt(nkq[1], 10);

  const q = parseInt(nkq[2], 10);

  const a = readLine()
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));

  let queries = [];

  for (let i = 0; i < q; i++) {
    const queriesItem = parseInt(readLine(), 10);
    queries.push(queriesItem);
  }

  const result = circularArrayRotation(a, k, queries);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
