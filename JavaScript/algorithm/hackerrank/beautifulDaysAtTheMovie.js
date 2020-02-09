// Lily likes to play games with integers.
// She has created a new game where she determines the difference between a number and its reverse.
// For instance, given the number 12, its reverse is 21.
// Their difference is 9.
// The number 120 reversed is 21, and their difference is 99.
// She decides to apply her game to decision making.
// She will look at a numbered range of days and will only go to a movie on a beautiful day.

// Given a range of numbered days, [i,...j] and a number k, determine the number of days in the range that are beautiful.
// Beautiful numbers are defined as numbers where [i - reverse(i)] is evenly divisible by k.
// If a day's value is a beautiful number, it is a beautiful day.Print the number of beautiful days in the range.

// Function Description
// Complete the beautifulDays function in the editor below.
// It must return the number of beautiful days in the range.
// beautifulDays has the following parameter(s):
// i: the starting day number
// j: the ending day number
// k: the divisor

// Input Format
// A single line of three space - separated integers describing the respective values of i, j, and k.

// Constraints
// 1 <= i <= j <= 2 * 10^6
// 1 <= k <= 2 * 10^9

// Output Format
// Print the number of beautiful days in the inclusive range between i and j.

// Sample Input
// 20 23 6

// Sample Output
// 2

// Explanation
// Lily may go to the movies on days 20, 21, 22, and 23.
// We perform the following calculations to determine which days are beautiful:

// Day 20 is beautiful because the following evaluates to a whole number: (20-02)/6 = 18/6 = 3
// Day 21 is not beautiful because the following doesn't evaluate to a whole number: (21-12)/6 = 9/6 = 1.5
// Day 22 is beautiful because the following evaluates to a whole number: (22-22)/6 = 0/6 = 0
// Day 23 is not beautiful because the following doesn't evaluate to a whole number: (23-32)/6 = 9/6 = 1.5
// Only two days, 20 and 22, in this interval are beautiful.
// Thus, we print 2 as our answer.

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

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  // 일단 해당되는 날짜를 구해야해서 배열하나 선언
  const days = [];
  // i부터 j까지 해당되는 날짜를 일단 배열에 넣기
  for (let day = i; day <= j; day++) {
    days.push(day);
  }

  // 배열을 돌면서
  return (
    days
      .map(item => {
        // 원본이랑
        const originalNum = item;
        // 꺼꾸로 도는 숫자를 구한다음
        const reverseNum = Number(
          item
            .toString()
            .split("")
            .reverse()
            .join("")
        );
        // 차이를 구한다. 차이니까 음수여도 절대적인 차이만 얻기위해 Math.abs 사용
        const diff = Math.abs(originalNum - reverseNum);
        // 만약 구한 차이가 k로 나누어지면 beautiful day
        if (Number.isInteger(diff / k)) return true;
        // 아니면 아닌거..
        else return false;
      })
      // beautiful day만 구해서 갯수 반환
      .filter(item => item === true).length
  );
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const ijk = readLine().split(" ");

  const i = parseInt(ijk[0], 10);

  const j = parseInt(ijk[1], 10);

  const k = parseInt(ijk[2], 10);

  let result = beautifulDays(i, j, k);

  ws.write(result + "\n");

  ws.end();
}
