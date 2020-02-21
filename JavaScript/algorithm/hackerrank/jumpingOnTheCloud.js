// Aerith is playing a cloud hopping game.
// In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds.
// Her character must jump from cloud to cloud until it reaches the start again.

// To play, Aerith is given an array of clouds, and an energy level e = 100.
// She starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i+k)%n].
// If Aerith lands on a thundercloud, c[i] = 1, her energy(e) decreases by 2 additional units.
// The game ends when Aerith lands back on cloud 0.

// Given the values of n, k, and the configuration of the clouds as an array c,
// can you determine the final value of e after the game ends ?

// For example, give c = [0, 0, 1, 0] and k = 2, the indices of her path are 0 -> 2 -> 0.
// Her energy level reduces by 1 for each jump to 98.
// She landed on one thunderhead at an additional cost of 2 energy units.
// Her final energy level is 96.

// Note: Recall that % refers to the modulo operation.
// In this case, it serves to make the route circular.
// If Aerith is at c[n-1] and jumps 1, she will arrive at c[0].

// Function Description
// Complete the jumpingOnClouds function in the editor below.
// It should return an integer representing the energy level remaining after the game.

// jumpingOnClouds has the following parameter(s):
// c: an array of integers representing cloud types
// k: an integer representing the length of one jump

// Input Format
// The first line contains two space - separated integers, n and k, the number of clouds and the jump distance.
// The second line contains n space - separated integers c[i] where 0 <= i < n.
// Each cloud is described as follows:
// If c[i] = 0, then cloud i is a cumulus cloud.
// If c[i] = 1, then cloud i is a thunderhead.

// Constraints
// 2 <= n <= 25
// 1 <= k <= n
// n % k = 0
// c[i] = 0 | 1

// Output Format
// Print the final value of e on a new line.

// Sample Input
// 8 2
// 0 0 1 0 0 1 1 0

// Sample Output
// 92

// Explanation
// In the diagram below, red clouds are thunderheads and purple clouds are cumulus clouds:

// Observe that our thunderheads are the clouds numbered 2, 5, and 6.
// Aerith makes the following sequence of moves:

// Move: 0 -> 2, Energy: e = 100 - 1 - 2 = 97.
// Move: 2 -> 4, Energy: e = 97 - 1 = 96.
// Move: 4 -> 6, Energy: e = 96 - 1 - 2 = 93.
// Move: 6 -> 0, Energy: e = 93 - 1 = 92.

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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
  // 첫번째 점프 뛴 시점부터 스타트
  let baseIndex = k;
  // 에너지 초기값 100
  let energy = 100;
  // 일단 돌아오기전까지 다 뛰어보면
  while (baseIndex < c.length) {
    // c[i] = 1이면
    if (c[baseIndex] !== 0) {
      // 추가로 체력 2 제거
      energy -= 2;
    }
    // 공통적으로 점프뛸때 체력 1 제거
    energy -= 1;
    // 인덱스 증가
    baseIndex += k;
  }

  // 다 뛰고 돌아와야 하는데 첫번째 요소가 1이면 점프뛸때 깎이는 체력 + 추가 체력감소 2까지 -3
  // 요소가 0이면 점프뛸때 깎이는 체력 -1
  return c[0] === 1 ? energy - 3 : energy - 1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const c = readLine()
    .split(" ")
    .map(cTemp => parseInt(cTemp, 10));

  let result = jumpingOnClouds(c, k);

  ws.write(result + "\n");

  ws.end();
}
