// You are in charge of the cake for your niece's birthday and
// have decided the cake will have one candle for each year of her total age.
// When she blows out the candles, she’ll only be able to blow out the tallest ones.
// Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning 4 years old, and the cake will have 4 candles of height
// 4, 4, 1, 3, she will be able to blow out 2 candles successfully,
// since the tallest candles are of height 4 and there are 2 such candles.

// Function Description
// Complete the function birthdayCakeCandles in the editor below.
// It must return an integer representing the number of candles she can blow out.
// birthdayCakeCandles has the following parameter(s):
// ar: an array of integers representing candle heights

// Input Format
// The first line contains a single integer, n, denoting the number of candles on the cake.
// The second line contains n space-separated integers, where each integer i describes the height of candle i.

// Constraints
// 1 <= n <= 10^5
// 1 <= ar[i] <= 10^7

// Output Format
// Return the number of candles that can be blown out on a new line.

// Sample Input 0
// 4
// 3 2 1 3

// Sample Output 0
// 2

// Explanation 0
// We have one candle of height 1, one candle of height 2, and two candles of height 3.
// Your niece only blows out the tallest candles, meaning the candles where height=3.
// Because there are 2 such candles, we print 2 on a new line.

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

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  // 정답을 위한 변수
  let count = 0;
  // 먼저 제일 높이가 큰 캔들을 찾는다. (최대값)
  const tallestCandle = Math.max.apply(null, ar);
  // 배열을 돌면서
  for (let i = 0; i < ar.length; i++) {
    // 요소가 높이가 큰 캔들이면
    if (ar[i] === tallestCandle) {
      // 카운트 업
      count++;
    }
  }
  // 정답 노출
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arCount = parseInt(readLine(), 10);

  const ar = readLine()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10));

  let result = birthdayCakeCandles(ar);

  ws.write(result + "\n");

  ws.end();
}
