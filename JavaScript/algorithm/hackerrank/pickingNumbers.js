// Given an array of integers, find and print the maximum number of integers you can select from the array such that
// the absolute difference between any two of the chosen integers is less than or equal to 1.
// For example, if your array is a = [1, 1, 2, 2, 4, 4, 5, 5, 5],
// you can create two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5].
// The maximum length subarray has 5 elements.

// Function Description
// Complete the pickingNumbers function in the editor below.
// It should return an integer that represents the length of the longest array that can be created.
// pickingNumbers has the following parameter(s):
// a: an array of integers

// Input Format
// The first line contains a single integer n, the size of the array a.
// The second line contains n space-separated integers a[i].

// Constraints
// 2 <= n <= 100
// 0 < a[i] < 100
// The answer will be >= 2.

// Output Format
// A single integer denoting the maximum number of integers you can choose from the array such that
// the absolute difference between any two of the chosen integers is <= 1.

// Sample Input 0
// 6
// 4 6 5 3 3 1

// Sample Output 0
// 3

// Explanation 0
// We choose the following multiset of integers from the array: {4, 3, 3}.
// Each pair in the multiset has an absolute difference <= 1 (i.e. | 4 - 3 | = 1, and | 3 - 3 | = 0),
// so we print the number of chosen integers, 3, as our answer.

// Sample Input 1
// 6
// 1 2 2 3 1 2

// Sample Output 1
// 5

// Explanation 1
// We choose the following multiset of integers from the array: {1, 2, 2, 1, 2}.
// Each pair in the multiset has an absolute difference <= 1
// (i.e. | 1 - 2 | = 1, | 1 - 1 | = 0, and | 2 - 2 | = 0),
// so we print the number of chosen integers, 5, as our answer.

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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
  // 일단 파라미터로 넘어온 배열을 복사하여, 중복제거한다.
  const copyRemoveDupArr = [...new Set(a)];
  // 정답 카운트를 위한 변수
  let answer = 0;
  // 중복제거한 배열을 돌면서
  for (let i = 0; i < copyRemoveDupArr.length; i++) {
    // 해당 숫자가 원본 배열에 몇개 포함되어 있는지 알아본다.
    const matchedArrSize = a.filter(item => item === copyRemoveDupArr[i])
      .length;

    // 해당 숫자 + 1이 원본 배열에 몇개 포함되어 있는지 알아본다.
    const matchedUpArrSize = a.filter(item => item === copyRemoveDupArr[i] + 1)
      .length;
    // 해당 숫자 - 1이 원본 배열에 몇개 포함되어 있는지 알아본다.
    const matchedDownArrSize = a.filter(
      item => item === copyRemoveDupArr[i] - 1
    ).length;

    // 숫자와 해당숫자 + 1 혹은 해당숫자 - 1이 해당되는 배열의 크기중 큰 것을 해당숫자가 포함된 배열의 크기와 더했을때
    // 만약 정답보다 크다면
    if (
      answer <
      matchedArrSize + Math.max(matchedUpArrSize, matchedDownArrSize)
    ) {
      // 정답으로 넣어준다.
      answer = matchedArrSize + Math.max(matchedUpArrSize, matchedDownArrSize);
    }
  }

  // 정답 출력
  return answer;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));

  const result = pickingNumbers(a);

  ws.write(result + "\n");

  ws.end();
}

// 일주일동안 머리 많이 써서 그런지 뭔가 나른해서
// 더 고민하게 된 문제였다.
// 더 좋은 방법이 있을텐데 나중에 생각해보자.
