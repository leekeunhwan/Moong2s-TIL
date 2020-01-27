// Maria plays college basketball and wants to go pro.Each season she maintains a record of her play.
// She tabulates the number of times she breaks her season record for most points and least points in a game.
// Points scored in the first game establish her record for the season, and she begins counting from there.

// For example, assume her scores for the season are represented in the array scores = [12, 24, 10, 24].
// Scores are in the same order as the games played.
// She would tabulate her results as follows:

// Count
// Game  Score  Minimum  Maximum   Min Max
// 0      12     12       12       0   0
// 1      24     12       24       0   1
// 2      10     10       24       1   1
// 3      24     10       24       1   1

// Given Maria's scores for a season, find and print the number of times
// she breaks her records for most and least points scored during the season.

// Function Description
// Complete the breakingRecords function in the editor below.
// It must return an integer array containing the numbers of times she broke her records.
// Index 0 is for breaking most points records, and index 1 is for breaking least points records.

// breakingRecords has the following parameter(s):
// scores: an array of integers

// Input Format
// The first line contains an integer n, the number of games.
// The second line contains n space - separated integers describing the respective values of score0, score1, ..., scoreN-1.

// Constraints
// 1 <= n <= 1000
// 0 <= scores[i] <= 10^8

// Output Format
// Print two space - seperated integers describing the respective numbers of times her
// best(highest) score increased and her worst(lowest) score decreased.

// Sample Input 0
// 9
// 10 5 20 20 4 5 2 25 1

// Sample Output 0
// 2 4

// Explanation 0
// The diagram below depicts the number of times Maria broke her best and worst records throughout the season:

// She broke her best record twice(after games 2 and 7) and her worst record four times(after games 1, 4, 6, and 8),
// so we print 2 4 as our answer.Note that she did not break her record for best score during game 3,
// as her score during that game was not strictly greater than her best record at the time.

// Sample Input 1
// 10
// 3 4 21 36 10 28 35 5 24 42

// Sample Output 1
// 4 0

// Explanation 1
// The diagram below depicts the number of times Maria broke her best and worst records throughout the season:

// She broke her best record four times(after games 1, 2, 3, and 9) and
// her worst record zero times(no score during the season was lower than the one she earned during her first game),
// so we print 4 0 as our answer.

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
  // 높은 점수 기록 갱신을 체크할 변수
  let highBreak = 0;
  // 낮은 점수 기록 갱신을 체크할 변수
  let lowBreak = 0;
  // 초기 높은 점수 (배열 첫번째 숫자)
  let tempHigh = scores[0];
  // 초기 낮은 점수 (배열 첫번째 숫자)
  let tempLow = scores[0];
  // 첫번째 숫자는 넣어줬으니 두번째 배열요소부터
  for (let i = 1; i < scores.length; i++) {
    // 해당 점수가 높은 기록 갱신하면
    if (scores[i] > tempHigh) {
      // 기록갱신 회수 업
      highBreak++;
      // 기록갱신했으니 높은 점수에 현재 점수 반영
      tempHigh = scores[i];
    }
    // 해당 점수가 낮은 기록 갱신하면
    if (scores[i] < tempLow) {
      // 기록갱신 회수 업
      lowBreak++;
      // 기록갱신했으니 낮은 점수에 현재 점수 반영
      tempLow = scores[i];
    }
  }
  // 정답 출력
  return [highBreak, lowBreak];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const scores = readLine()
    .split(" ")
    .map(scoresTemp => parseInt(scoresTemp, 10));

  const result = breakingRecords(scores);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
