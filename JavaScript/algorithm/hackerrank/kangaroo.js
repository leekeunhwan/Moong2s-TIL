// You are choreographing a circus show with various animals.
// For one act, you are given two kangaroos on a number line ready to jump in the positive direction
// (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show.
// If it is possible, return YES, otherwise return NO.

// For example, kangaroo 1 starts at x1 = 2 with a jump distance v1 = 1 and kangaroo 2 starts at x2 = 1 with a jump distance of v2 = 2.
// After one jump, they are both at x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so our answer is YES.

// Function Description
// Complete the function kangaroo in the editor below.
// It should return YES if they reach the same position at the same time, or NO if they don't.

// kangaroo has the following parameter(s):
// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

// Input Format
// A single line of four space - separated integers denoting the respective values of x1, v1, x2, and v2.

// Constraints
// 0 <= x1 < x2 <= 10000
// 1 <= v1 <= 10000
// 1 <= v2 <= 10000

// Output Format
// Print YES if they can land on the same location at the same time; otherwise, print NO.
// Note: The two kangaroos must land at the same location after making the same number of jumps.

// Sample Input 0
// 0 3 4 2

// Sample Output 0
// YES

// Explanation 0
// The two kangaroos jump through the following sequence of locations:

// From the image, it is clear that the kangaroos meet at the same location(number 12 on the number line)
// after same number of jumps(4 jumps), and we print YES.

// Sample Input 1
// 0 2 5 3

// Sample Output 1
// NO

// Explanation 1
// The second kangaroo has a starting location that is ahead(further to the right) of the first kangaroo's starting location (i.e., x2 > x1).
// Because the second kangaroo moves at a faster rate(meaning v2 > v1) and is already ahead of the first kangaroo,
// he first kangaroo will never be able to catch up.Thus, we print NO.

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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  // Yes인지 No인지 알기위한 구분자
  let flag = false;
  // 연산 횟수 체크
  let count = 0;
  // 초기값 x1
  let initaialX1 = x1;
  // 초기값 x2
  let initaialX2 = x2;

  // 못따라가 가는 케이스
  if (v1 < v2) return "NO";

  // 따라가는 케이스일 경우는 연산을 해봐야 함
  // 10000은 v1, v2의 최대값
  // 아마, 못따라가는 케이스가 아닌 이상
  // 최소공배수에서 걸리긴 할 것임
  while (count < 10000) {
    // 무식하게 턴마다 점프를 한다.
    initaialX1 = initaialX1 + v1;
    initaialX2 = initaialX2 + v2;
    // 값이 같으면
    if (initaialX1 === initaialX2) {
      // 플래그를 true로
      flag = true;
      // 루프 종료
      break;
    }
    // 무한루프 방지
    count++;
  }
  // flag가 true면 YES, false면 NO
  return flag ? "YES" : "NO";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const x1V1X2V2 = readLine().split(" ");

  const x1 = parseInt(x1V1X2V2[0], 10);

  const v1 = parseInt(x1V1X2V2[1], 10);

  const x2 = parseInt(x1V1X2V2[2], 10);

  const v2 = parseInt(x1V1X2V2[3], 10);

  let result = kangaroo(x1, v1, x2, v2);

  ws.write(result + "\n");

  ws.end();
}
