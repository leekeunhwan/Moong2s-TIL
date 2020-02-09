// HackerLand Enterprise is adopting a new viral advertising strategy.
// When they launch a new product, they advertise it to exactly 5 people on social media.

// On the first day, half of those 5 people(i.e. floor(5/2) = 2) like the advertisement and each shares it with 3 of their friends.
// At the beginning of the second day, floor(5/2) * 3 = 2 * 3 = 6 people receive the advertisement.

// Each day, floor(recipients/2) of the recipients like the advertisement and will share it with 3 friends on the following day.
// Assuming nobody receives the advertisement twice,
// determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.

// For example, assume you want to know how many have liked the ad by the end of the 5th day.

// Day Shared Liked Cumulative
// 1      5     2       2
// 2      6     3       5
// 3      9     4       9
// 4     12     6      15
// 5     18     9      24

// The cumulative number of likes is 24.

// Function Description
// Complete the viralAdvertising function in the editor below.
//It should return the cumulative number of people who have liked the ad at a given time.
// viralAdvertising has the following parameter(s):
// n: the integer number of days

// Input Format
// A single integer, n, denoting a number of days.

// Constraints
// 1 <= n <= 50

// Output Format
// Print the number of people who liked the advertisement during the first n days.

// Sample Input
// 3

// Sample Output
// 9

// Explanation
// This example is depicted in the following diagram:

// 2 people liked the advertisement on the first day 3,
// people liked the advertisement on the second day and 4 people liked the advertisement on the third day,
// so the answer is 2 + 3 + 4 = 9.

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

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
  // 첫날 공유된 갯수
  let shared = 5;
  // 첫날 좋아요 갯수
  let liked = 2;
  // 누적 좋아요
  let cumulative = 2;
  // 첫번째 날은 주어진 static한 값이니 2일차부터 계산
  for (let i = 2; i <= n; i++) {
    // 공유는 기존 공유한 것에 2로 나눈뒤 버린다음, * 3을 곱해주면 된다.
    shared = Math.floor(shared / 2) * 3;
    // 좋아요는 방금 새로 공유한 것에 2로 나눈뒤 버리면 된다.
    liked = Math.floor(shared / 2);
    // 누적좋아요는 기존 값에 방금 계산한 liked를 더해주면 된다.
    cumulative += liked;
  }
  // 누적 좋아요 출력
  return cumulative;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let result = viralAdvertising(n);

  ws.write(result + "\n");

  ws.end();
}

// 쉽게 풀수 있다.
