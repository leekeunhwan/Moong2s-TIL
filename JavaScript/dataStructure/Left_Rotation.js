// A left rotation operation on an array of size  shifts each of the array's elements 1 unit to the left.
// For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

// Given an array of n integers and a number, d, perform d left rotations on the array.
// Then print the updated array as a single line of space - separated integers.

// Input Format
// The first line contains two space - separated integers denoting the respective values of n(the number of integers)
// and d(the number of left rotations you must perform).
// The second line contains n space - separated integers describing the respective elements of the array's initial state.

// Constraints
// 1 <= n <= 10^5
// 1 <= d <= n
// 1 <= a[i] <= 10^6

// Output Format
// Print a single line of n space - separated integers denoting the final state of the array after performing d left rotations.

// Sample Input
// 5 4
// 1 2 3 4 5

// Sample Output
// 5 1 2 3 4

// Explanation
// When we perform d = 4 left rotations, the array undergoes the following sequence of changes:
// [1,2,3,4,5] => [2,3,4,5,1] => [3,4,5,1,2] => [4,5,1,2,3] => [5,1,2,3,4]
// Thus, we print the array's final state as a single line of space-separated values, which is 5 1 2 3 4.

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

function leftRotation(d, a) {
  // 파라미터로 넘어온 배열 직접 조작안되게 복제함
  const rotationTarget = [...a];
  // 로테이션 카운트
  let rotationCount = d;
  // 로테이션 카운트만큼 돌려본다.
  while (rotationCount > 0) {
    // 앞에 있는 글자를 빼서
    const tempData = rotationTarget.shift();
    // 뒤로 보낸다.
    rotationTarget.push(tempData);
    // 횟수 차감
    rotationCount--;
  }
  // 정답 출력
  return rotationTarget;
}

function main() {
  const nd = readLine().split(" ");
  const n = parseInt(nd[0], 10);
  const d = parseInt(nd[1], 10);
  const a = readLine()
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));

  console.log(leftRotation(d, a).join(" "));
}
