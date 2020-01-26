// Alice and Bob each created one problem for HackerRank.
// A reviewer rates the two challenges,
// awarding points on a scale from 1 to 100 for three categories:
// problem clarity, originality, and difficulty.

// We define the rating for Alice's challenge to be the triplet a=(a[0], a[1], a[2]),
// and the rating for Bob's challenge to be the triplet b=(b[0], b[1], b[2]).

// Your task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded 1 point.
// If a[i] < b[i], then Bob is awarded 1 point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// For example, a=[1,2,3] and b=[3,2,1].
// For elements 0, Bob is awarded a point because a[0] < b[0].
// For the equal elements a[1] and b[1], no points are earned.
// Finally, for elements 2, a[2] > b[2] so Alice receives a point.
// Your return array would be [1,1] with Alice's score first and Bob's second.

// Function Description
// Complete the function compareTriplets in the editor below.
// It must return an array of two integers, the first being Alice's score and the second being Bob's.

// compareTriplets has the following parameter(s):
// a: an array of integers representing Alice's challenge rating
// b: an array of integers representing Bob's challenge rating

// Input Format
// The first line contains 3 space - separated integers, a[0], a[1], and a[2], describing the respective values in triplet a.
// The second line contains 3 space - separated integers, b[0], b[1], and b[2], describing the respective values in triplet b.

// Constraints
// 1 <= a[i] <= 100
// 1 <= b[i] <= 100

// Output Format
// Return an array of two integers denoting the respective comparison points earned by Alice and Bob.

// Sample Input 0
// 5 6 7
// 3 6 10

// Sample Output 0
// 1 1

// Explanation 0

// In this example:
// a = (a[0],a[1],a[2]) = (5,6,7)
// b = (b[0],b[1],b[2]) = (3,6,10)

// Now, let's compare each individual score:
// a[0] > b[0], so Alice receives 1 point.
// a[1] = b[1], so nobody receives a point.
// a[2] < b[2], so Bob receives 1 point.
// Alice's comparison score is 1, and Bob's comparison score is 1. Thus, we return the array [1,1].

// Sample Input 1
// 17 28 30
// 99 16 8

// Sample Output 1
// 2 1

// Explanation 1
// Comparing the 0th elements, 17 < 99 so Bob receives a point.
// Comparing the 1st and 2nd elements, 28 > 16 and 30 > 8 so Alice receives two points.
// The return array is [2,1].

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  // 앨리스
  let alice = 0;
  // 밥
  let bob = 0;

  // 배열을 확인해보면서 (a와 b의 배열의 크기가 동일하므로 a.length로 함)
  for (let i = 0; i < a.length; i++) {
    // a의 i번째 요소가 b의 i번째 요소보다 크면
    if (a[i] > b[i]) {
      // 앨리스에게 점수 추가
      alice += 1;
      // a의 i번째 요소가 b의 i번째 요소보다 작으면
    } else if (a[i] < b[i]) {
      // 밥에게 점수 추가
      bob += 1;
    }
    // 같으면 포인트 안주니까 로직을 굳이 추가할 필요 없음
  }

  // 앨리스와 밥의 점수를 배열에 담아 정답 출력
  return [alice, bob];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));

  const b = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(bTemp => parseInt(bTemp, 10));

  const result = compareTriplets(a, b);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
