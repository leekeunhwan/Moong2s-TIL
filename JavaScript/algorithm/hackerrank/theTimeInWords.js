// Given the time in numerals we may convert it into words, as shown below:
// 5:00 => five o' clock
// 5:01 => one minute past five
// 5:10 => ten minutes past five
// 5:15 => quarter past five
// 5:30 => half past five
// 5:40 => twenty minutes to six
// 5:45 => quarter to six
// 5:47 => thirteen minutes to six
// 5:28 => twenty eight minutes past five

// At minutes = 0, use o' clock. For 1 <= minutes <= 30, use past, and for 30 < minutes use to.
// Note the space between the apostrophe and clock in o' clock.
// Write a program which prints the time in words for the input given in the format described.

// Function Description
// Complete the timeInWords function in the editor below.
// It should return a time string as described.
// timeInWords has the following parameter(s):
// h: an integer representing hour of the day
// m: an integer representing minutes after the hour

// Input Format
// The first line contains h, the hours portion The second line contains m, the minutes portion

// Constraints
// 1 <= h <= 12
// 0 <= m < 60

// Output Format
// Print the time in words as described.

// Sample Input 0
// 5
// 47

// Sample Output 0
// thirteen minutes to six

// Sample Input 1
// 3
// 00

// Sample Output 1
// three o' clock

// Sample Input 2
// 7
// 15

// Sample Output 2
// quarter past seven

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

// Complete the timeInWords function below.
function timeInWords(h, m) {
  // 시간을 나타낼 스트링 타입 변수
  let hStr;
  // 분을 나타낼 스트링 타입 변수
  let mStr;
  // 분에 따른 character sets
  // 노가다 안하는 방법있으면 알고싶다..
  const charSet = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine"
  };

  // 조건에 맞게 적어주기
  mStr =
    m === 0
      ? "o' clock"
      : m === 1
      ? `one minute past`
      : m === 15
      ? "quarter past"
      : m === 30
      ? "half past"
      : m === 45
      ? "quarter to"
      : 1 < m && m < 30
      ? `${charSet[m]} minutes past`
      : `${charSet[60 - m]} minutes to`;

  // 시간도 조건에 맞게 뽑아주기
  if (m <= 30) {
    hStr = charSet[h];
  } else {
    hStr = charSet[h + 1];
  }

  // 정답 출력
  return m === 0 ? `${hStr} ${mStr}` : `${mStr} ${hStr}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const h = parseInt(readLine(), 10);

  const m = parseInt(readLine(), 10);

  let result = timeInWords(h, m);

  ws.write(result + "\n");

  ws.end();
}

// 미디엄인데...
// 찜찜하다..
// 알고리즘이라기보다는 뭔가..
// 그냥 노가다같은...
