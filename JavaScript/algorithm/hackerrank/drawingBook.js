// Brie’s Drawing teacher asks her class to open their books to a page number.
// Brie can either start turning pages from the front of the book or from the back of the book.
// She always turns pages one at a time.When she opens the book, page 1 is always on the right side:

// When she flips page 1, she sees pages 2 and 3.
// Each page except the last page will always be printed on both sides.
// The last page may only be printed on the front, given the length of the book.
// If the book is n pages long, and she wants to turn to page p,
// what is the minimum number of pages she will turn?
// She can start at the beginning or the end of the book.
// Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page p.

// Function Description
// Complete the pageCount function in the editor below.
// It should return the minimum number of pages Brie must turn.
// pageCount has the following parameter(s):
// n: the number of pages in the book
// p: the page number to turn to

// Input Format
// The first line contains an integer n, the number of pages in the book.
// The second line contains an integer, p, the page that Brie's teacher wants her to turn to.

// Constraints
// 1 <= n <= 10^5
// 1 <= p <= n

// Output Format
// Print an integer denoting the minimum number of pages Brie must turn to get to page p.

// Sample Input 0
// 6
// 2

// Sample Output 0
// 1

// Explanation 0
// If Brie starts turning from page 1, she only needs to turn 1 page:
// If Brie starts turning from page 6, she needs to turn 2 pages:
// Because we want to print the minumum number of page turns, we print 1 as our answer.

// Sample Input 1
// 5
// 4

// Sample Output 1
// 0

// Explanation 1
// If Brie starts turning from page 1, she needs to turn 2 pages:
// If Brie starts turning from page 5, she doesn't need to turn any pages:
// Because we want to print the minimum number of page turns, we print 0 as our answer.

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
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
  // 보기 편하게 하기 위해 선언
  const lastPage = n;
  const findPage = p;

  // 마지막 페이지가 짝수인지 확인
  // 마지막 페이지가 짝수인 경우 찾고자하는 페이지가 홀수면 +1을 해야하기에
  // 가령 6에서 5페이지로 넘어간다 하면
  // 1페이지 차이이지만 페이지를 넘겨야한다.
  // 반면 마지막 페이지가 홀수인 경우
  // 찾고자하는 페이지가 짝수면 1페이지 차이의 경우 안넘겨도 된다.
  const lastPageIsEven = n % 2 === 0;
  // 찾고자 하는 페이지가 짝수인지 확인
  const findPageIsEven = p % 2 === 0;

  // 마지막 페이지에서 찾고자하는 페이지를 뺀다.
  const diff = lastPage - findPage;
  // 마지막 페이지에서 카운트 하는 경우
  const fromLastCount =
    // 마지막페이지가 짝수이고, 찾고자하는 페이지가 홀수인 경우
    lastPageIsEven && !findPageIsEven
      ? // 마지막페이지에서 찾고자하는 페이지를 뺀 것을 2로 나눈후 소숫점을 버린다.
        // 그리고 위에서 설명한 것처럼 +1을 해준다.
        parseInt(diff / 2) + 1
      : // 아니면 짝수에서 짝수이거나, 홀수에서 짝수, 홀수에서 홀수일땐
        //// 마지막페이지에서 찾고자하는 페이지를 뺀 것을 2로 나눈후 소숫점을 버린다.
        parseInt(diff / 2);
  // 첫번째부터 찾는 경우는 찾고자 하는 페이지에서 1을 빼준후 2로 나눈후 올려준다.
  const fromFirstCount = Math.ceil((findPage - 1) / 2);

  // 적은 경우 출력
  return Math.min(fromLastCount, fromFirstCount);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const p = parseInt(readLine(), 10);

  let result = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}

// 조금 헷갈리는 부분이 있었다.
// 21분...
