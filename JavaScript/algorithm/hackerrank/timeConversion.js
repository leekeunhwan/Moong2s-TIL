// Given a time in 12-hour AM / PM format, convert it to military(24 - hour) time.

// Note: Midnight is 12: 00: 00AM on a 12 - hour clock, and 00: 00: 00 on a 24 - hour clock.
// Noon is 12: 00: 00PM on a 12 - hour clock, and 12: 00: 00 on a 24 - hour clock.

// Function Description
// Complete the timeConversion function in the editor below.
// It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):
// s: a string representing time in 12 hour format

// Input Format
// A single string  containing a time in 12-hour clock format(i.e.: hh:mm:ssAM or hh:mm:ssPM),
// where 01 <= hh <= 12 and 00 <= mm, ss <= 59.

// Constraints
// All input times are valid

// Output Format
// Convert and print the given time in 24-hour format, where 00<=hh<=23.

// Sample Input 0
// 07: 05: 45PM

// Sample Output 0
// 19: 05: 45

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
 * Complete the timeConversion function below.
 */
function timeConversion(time) {
  // 정답을 담을 변수의 기본 값으로 파라미터 넣기
  let answer = time;
  // 시간 포맷 구하기 (보다 효율적인 방법이 있을 것 같은데, 시간제한 있다는 생각에 이렇게 함)
  let timeFormat = answer.split("M")[0][answer.split("M")[0].length - 1];
  // 시간 포맷이 P이면
  if (timeFormat === "P") {
    // 일단 PM인거 알았으니까 제거
    answer = answer.replace(/PM/, "");
    // 그리고 :를 기준으로 나누기
    let copySplitArr = answer.split(":");
    // 시간이 12시이면 그대로, 아니면 12 더해주기
    if (copySplitArr[0] != 12) {
      copySplitArr[0] = String(Number(copySplitArr[0]) + 12);
    }
    // 다시 합쳐주기
    answer = copySplitArr.join(":");
  } else {
    // 시간 포맷이 A이면 이제 AM인거 알았으니 제거
    answer = answer.replace(/AM/, "");
    // 그리고 :를 기준으로 나누기
    const copySplitArr = answer.split(":");
    // 시간이 12시이면 00으로 바꿔주기
    if (copySplitArr[0] == 12) copySplitArr[0] = "00";
    // 다시 합쳐주기
    answer = copySplitArr.join(":");
  }
  // 정답 노출
  return answer;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
