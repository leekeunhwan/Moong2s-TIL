// The Utopian Tree goes through 2 cycles of growth every year.
// Each spring, it doubles in height.Each summer, its height increases by 1 meter.

// Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring.
// How tall will her tree be after n growth cycles ?

// For example, if the number of growth cycles is, the calculations are as follows:

// Period  Height
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14

// Function Description
// Complete the utopianTree function in the editor below.
// It should return the integer height of the tree after the input number of growth cycles.
// utopianTree has the following parameter(s):
// n: an integer, the number of growth cycles to simulate

// Input Format
// The first line contains an integer, t, the number of test cases.
// subsequent lines each contain an integer, n, denoting the number of cycles for that test case.

// Constraints
// 1 <= t <= 10
// 0 <= n <= 60

// Output Format
// For each test case, print the height of the Utopian Tree after n cycles.
// Each height must be printed on a new line.

// Sample Input
// 3
// 0
// 1
// 4

// Sample Output
// 1
// 2
// 7

// Explanation
// There are 3 test cases.
// In the first case ( n = 0 ), the initial height( H = 1 ) of the tree remains unchanged.
// In the second case ( n = 1 ), the tree doubles in height and is 2 meters tall after the spring cycle.
// In the third case ( n = 4 ), the tree doubles its height in spring( n = 1, H = 2 ),
// then grows a meter in summer( n = 2, H = 3 ), then doubles after the next spring( n = 3, H = 6 ),
// and grows another meter after summer( n = 4, H = 7 ).
// Thus, at the end of 4 cycles, its height is 7 meters.

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

// Complete the utopianTree function below.
function utopianTree(n) {
  // 초기 0일때 나무의 높이는 1이다.
  let treeHeight = 1;
  // 다음 해부터 목표의 해까지 포함해서 계산해야하므로 +1 해줌
  for (let i = 1; i < n + 1; i++) {
    // 홀수 해에는 봄에 x2
    // 짝수 해에는 여름에 +1
    if (i % 2 !== 0) {
      treeHeight *= 2;
    } else {
      treeHeight += 1;
    }
  }
  // 정답 출력
  return treeHeight;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    let result = utopianTree(n);

    ws.write(result + "\n");
  }

  ws.end();
}

// 0에서 1년갈때 성장한다고 생각했다가 순간 헷갈렸던 문제,
// 그 해에 성장했다고 이해하고 나서는 쉽게 풀었다.
// 문제의 지문을 꼼꼼히보고 머릿속으로 충분히 장면을 상상해보고
// 문제를 풀어보자.
