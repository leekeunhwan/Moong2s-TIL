// Alice is playing an arcade game and wants to climb to the top of the leaderboard and wants to track her ranking.
// The game uses Dense Ranking, so its leaderboard works like this:
// The player with the highest score is ranked number 1 on the leaderboard.
// Players who have equal scores receive the same ranking number,
// and the next player(s) receive the immediately following ranking number.

// For example, the four players on the leaderboard have high scores of 100, 90, 90, and 80.
// Those players will have ranks 1, 2, 2, and 3, respectively.
// If Alice's scores are 70, 80 and 105, her rankings after each game are 4th, 3rd and 1st.

// Function Description
// Complete the climbingLeaderboard function in the editor below.
// It should return an integer array where each element res[j] represents Alice's rank after the jth game.

// climbingLeaderboard has the following parameter(s):
// scores: an array of integers that represent leaderboard scores
// alice: an array of integers that represent Alice's scores

// Input Format
// The first line contains an integer n, the number of players on the leaderboard.
// The next line contains n space - separated integers scores[i], the leaderboard scores in decreasing order.
// The next line contains an integer, m, denoting the number games Alice plays.
// The last line contains m space - separated integers alice[j], the game scores.

// Constraints
// 1 <= n <= 2 * 10^5
// 1 <= m <= 2 * 10^5
// 0 <= scores[i] <= 10^9 for 0 <= i < n
// 0 <= alice[j] <= 10^9 for 0 <= j < m

// The existing leaderboard, scores, is in descending order.
// Alice's scores, alice, are in ascending order.

// Subtask
// For 60% of the maximum score:
// 1 <= n <= 200
// 1 <= m <= 200

// Output Format
// Print m integers.
// The jth integer should indicate Alice's rank after playing the jth game.

// Sample Input 1

// Array: score
// 100 100 50 40 40 20 10
// Array: alice
// 5 25 50 120

// 7
// 100 100 50 40 40 20 10
// 4
// 5 25 50 120

// Sample Output 1
// 6
// 4
// 2
// 1

// Explanation 1

// Alice starts playing with 7 players already on the leaderboard, which looks like this:
// After Alice finishes game 0, her score is 5 and her ranking is 6:
// After Alice finishes game 1, her score is 25 and her ranking is 4:
// After Alice finishes game 2, her score is 50 and her ranking is tied with Caroline at 2:
// After Alice finishes game 3, her score is 120 and her ranking is 1:

// Sample Input 2

// Array: scores
// 100 90 90 80 75 60
// Array: alice
// 50 65 77 90 102

// 6
// 100 90 90 80 75 60
// 5
// 50 65 77 90 102

// Sample Output 2
// 6
// 5
// 4
// 2
// 1

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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
  // 정답을 담을 변수 (기본값 빈배열)
  const answer = [];
  // new Set은 배열의 중복을 제거하고 Object로 반환, ...로 다시 배열로 만들어준다.
  let removeDupArr = [...new Set(scores)];
  // 아래도 중복을 제거하는건데 시간 복잡도에서 걸렸었다
  // let removeDupArr = [...scores].filter((item,index) => [...scores].indexOf(item) === index)
  // 작은 점수부터 비교하기 위해 index는 맨 마지막 index로 기본값설정
  let index = removeDupArr.length - 1;
  // alice의 배열을 돌면서
  alice.forEach(item => {
    // index가 0보다 작을때까지
    while (index >= 0) {
      // 요소가 중복제거배열의 요소보다 크거나 같다면
      if (item >= removeDupArr[index]) {
        // index 제거
        index--;
        // 요소가 중복제거배열의 요소보다 작다면
      } else {
        // index+2를 정답 배열에 넣어준다.
        // index는 0부터 시작하니 등수는 index+1이다.
        answer.push(index + 2);
        // 반복문 종료
        break;
      }
    }
    // 만약 index가 0보다 작으면 최고점수니까 1을 정답 배열에 넣어준다.
    if (index < 0) answer.push(1);
  });
  // 정답 출력
  return answer;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scoresCount = parseInt(readLine(), 10);

  const scores = readLine()
    .split(" ")
    .map(scoresTemp => parseInt(scoresTemp, 10));

  const aliceCount = parseInt(readLine(), 10);

  const alice = readLine()
    .split(" ")
    .map(aliceTemp => parseInt(aliceTemp, 10));

  let result = climbingLeaderboard(scores, alice);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
