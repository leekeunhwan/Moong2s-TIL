// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays.You must determine how many such numbers exist.

// For example, given the arrays a = [2, 6] and b = [24, 36], there are two numbers between them: 6 and 12.
// 6 % 2 = 0, 6 % 6 = 0, 24 % 6 = 0 and 36 for the first value.
// Similarly, 12 % 2 = 0, 12 % 6 = 0 and 24 % 12 = 0, 36 % 12 = 0.

// Function Description
// Complete the getTotalX function in the editor below.
// It should return the number of integers that are betwen the sets.
// getTotalX has the following parameter(s):
// a: an array of integers
// b: an array of integers

// Input Format
// The first line contains two space - separated integers, n and m,
// the number of elements in array a and the number of elements in array b.
// The second line contains  distinct space - separated integers describing a[i] where 0 <= i < n.
// The third line contains  distinct space - separated integers describing b[j] where 0 <= j < m.

// Constraints
// 1 <= n,m <= 10
// 1 <= a[i] <= 100
// 1 <= b[j] <= 100

// Output Format
// Print the number of integers that are considered to be between a and b.

// Sample Input
// 2 3
// 2 4
// 16 32 96

// Sample Output
// 3

// Explanation
// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.
// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

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
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // 정답을 나타낼 변수 (기본값 빈 배열)
  let answer = [];
  // a와 b의 사이를 알아야 하므로
  // a의 마지막 숫자 구하기
  let aLastNum = a[a.length - 1];
  // b의 첫번째 숫자 구하기
  const bFirstNum = b[0];
  // a부터 b까지의 숫자로
  while (aLastNum <= bFirstNum) {
    // a를 나눠보기
    const resultA = a.map(item => {
      // 요소보다 나누는 숫자가 크다면
      if (item < aLastNum) {
        // 나누는 숫자를 요소로 나눈 나머지가 0이면 true, 아니면 false 반환
        return aLastNum % item === 0;
        // 요소보다 나누는 숫자가 작으면
      } else {
        // 요소를 나누는 숫자로 나눈 나머지가 0이면 true, 아니면 false 반환
        return item % aLastNum === 0;
      }
    });
    // b를 나눠보기
    // b는 나눠보는 마지막 숫자가 b의 첫번째 요소기에
    // 작을때 생각을 안해도 됨
    const resultB = b.map(item => item % aLastNum === 0);

    // a와 b를 나눈 결과가 모두 true라면
    if (
      resultA.every(item => item === true) &&
      resultB.every(item => item === true)
    ) {
      // 정답에 해당 숫자 담기
      answer.push(aLastNum);
    }
    // 무한루프 방지ㄴ
    aLastNum++;
  }
  // 정답은 숫자의 갯수니까 length 반환
  return answer.length;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const n = parseInt(firstMultipleInput[0], 10);

  const m = parseInt(firstMultipleInput[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const brr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(brrTemp => parseInt(brrTemp, 10));

  const total = getTotalX(arr, brr);

  ws.write(total + "\n");

  ws.end();
}
