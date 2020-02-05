// An array is a type of data structure that stores elements of the same type in a contiguous block of memory.
// In an array, A, of size N, each memory location has some unique index, i (where 0 <= i< N),
// that can be referenced as A[i] (you may also see it written as A(i)).

// Given an array, A, of N integers, print each element in reverse order as a single line of space - separated integers.

// Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

// Input Format

// The first line contains an integer, N (the number of integers in A).
// The second line contains N space - separated integers describing A.

// Constraints
// 1 <= N <= 10^3
// 1 <= A[i] <= 10^4, where A[i] is the ith integer in A

// Output Format
// Print all N integers in A in reverse order as a single line of space - separated integers.

// Sample Input 1
// Array: arr
// 1 4 3 2

// 4
// 1 4 3 2

// Sample Output 1
// 2 3 4 1

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

// Complete the reverseArray function below.
function reverseArray(a) {
  // 결과 리턴용 배열 선언
  const answer = [];
  // 주어진 배열을 뒤에서 부터 순회
  for (let i = a.length - 1; i >= 0; i--) {
    // 요소를 결과 리턴용 배열로 보내기
    answer.push(a[i]);
  }
  // 출력
  return answer;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const res = reverseArray(arr);

  ws.write(res.join(" ") + "\n");

  ws.end();
}
