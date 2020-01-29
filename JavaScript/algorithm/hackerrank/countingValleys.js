// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography.
// During his last hike he took exactly n steps.
// For every step he took, he noted if it was an uphill, U, or a downhill, D step.
// Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude.

// We define the following terms:
// A mountain is a sequence of consecutive steps above sea level,
// starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level,
// starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike,
// find and print the number of valleys he walked through.

// For example, if Gary's path is s = ['D', 'D', 'U', 'U', 'U', 'U', 'D', 'D'], he first enters a valley 2 units deep.
// Then he climbs out an up onto a mountain 2 units high.
// Finally, he returns to sea level and ends his hike.

// Function Description
// Complete the countingValleys function in the editor below.
//It must return an integer that denotes the number of valleys Gary traversed.
// countingValleys has the following parameter(s):
// n: the number of steps Gary takes
// s: a string describing his path

// Input Format
// The first line contains an integer n, the number of steps in Gary's hike.
// The second line contains a single string s, of n characters that describe his path.

// Constraints
// 2 <= n <= 10^6
// s[i] === 'U' || s[i] === 'D'

// Output Format
// Print a single integer that denotes the number of valleys Gary walked through during his hike.

// Sample Input
// 8
// UDDDUDUU

// Sample Output
// 1

// Explanation
// If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// He enters and leaves one valley.

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

// Complete the countingValleys function below.
function countingValleys(s) {
  // 계곡수 체크를 위한 변수
  let valley = 0;
  // 현재 계곡인지 산인지 체크하기 위한 변수
  let stack = 0;
  // 동선을 따라서 (배열을 돌면서)
  for (let i = 0; i < s.length; i++) {
    // 현재 요소가 D이면
    if (s[i] === "D") {
      // 스택 빼기
      stack--;
      // 현재 요소가 U이면
    } else {
      // 스택 더하기
      stack++;
      // 만약 올라왔는데 스택이 0이면 계곡을 하나 건넌것이기에 발리 카운팅 업!
      if (stack === 0) valley++;
    }
  }
  // 정답 노출
  return valley;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const s = readLine();

  let result = countingValleys(n, s);

  ws.write(result + "\n");

  ws.end();
}

// 문제가 명확하게 이해되면 오히려 푸는건 쉽다.
// 문제가 이해되지 않거나 예외 케이스를 캐치하지 못하면 그때부터 지치고 어렵고 힘들어진다.
// 7분 소요
