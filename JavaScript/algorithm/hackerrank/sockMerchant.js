// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are n = 7 socks with colors ar = [ 1, 2, 1, 2, 1, 3, 2 ].
// There is one pair of color 1 and one of color 2.
// There are three odd socks left, one of each color.
// The number of pairs is 2.

// Function Description
// Complete the sockMerchant function in the editor below.
// It must return an integer representing the number of matching pairs of socks that are available.
// sockMerchant has the following parameter(s):\
// n: the number of socks in the pile
// ar: the colors of each sock

// Input Format
// The first line contains an integer n, the number of socks represented in ar.
// The second line contains n space-separated integers describing the colors ar[i] of the socks in the pile.

// Constraints
// 1 <= n <= 100
// 1 <= ar[i] <= 100 where 0 <= i < n

// Output Format
// Return the total number of matching pairs of socks that John can sell.

// Sample Input
// 9
// 10 20 20 10 10 30 50 10 20

// Sample Output
// 3

// Explanation
// John can match three pairs of socks.

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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  // 일단 받은 배열을 복사해서 오름차순으로 정렬한다.
  const sortedArr = [...ar].sort((a, b) => a - b);
  // 몇쌍이 겹치는지 카운트할 변수
  let count = 0;
  // 임시로 비교할 변수
  let target = null;
  // 오름차순 정렬한 배열의 길이가 0이 될떄까지 (모두 비교할때까지)
  while (sortedArr.length > 0) {
    // target가 null이면
    if (target === null) {
      // target은 아무값도 없는 상태이니 0번째 배열 요소를 값으로 넣어준다.
      target = sortedArr[0];
      // 그리고 값을 넣어줬으니 0번째 배열 요소를 제거한다.
      sortedArr.splice(0, 1);
      // target이 null이 아니면 (값이 있으면)
    } else {
      // 0번째 배열요소와 비교하여 같으면
      if (target === sortedArr[0]) {
        // 쌍이므로 카운팅 업
        count++;
        // 그리고 비교하는 대상은 짝이 맞아서 같이 사라지니 null 할당
        target = null;
        // 그리고 방금 비교한 것은 삭제
        sortedArr.splice(0, 1);
        // 0번째 배열요소와 비교하여 다르면
      } else {
        // 0번째 배열요소를 값으로 다시 엎어쓰고 또 비교 시작
        target = sortedArr[0];
        // 그리고 값을 넣어줬으니 0번째 배열 요소를 제거한다.
        sortedArr.splice(0, 1);
      }
    }
  }
  // 정답 출력
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}

// 8분 40초 정도 소요
// easy가 한문제라도 나오면 진짜 시간은 더더욱 여유있어진다.
// easy ~ medium의 난이도라는 후기가 도는데,
// medium 3문제를 푼다고 생각하는게 제일 마음 편하게 문제를 풀 수 있을 것 같다.
// 해커랭크는 이와 별개로 자바스크립트를 주 언어로 랭킹 10000위 안에 들어보자 (목표)
