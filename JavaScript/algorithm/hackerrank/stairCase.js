// Consider a staircase of size n=4:
// #
// ##
// ###
// ####

// Observe that its base and height are both equal to n,
// and the image is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.

// Function Description

// Complete the staircase function in the editor below.
// It should print a staircase as described above.
// staircase has the following parameter(s):

// n: an integer

// Input Format
// A single integer, n, denoting the size of the staircase.

// Constraints

// 0 < n <= 100

// Output Format
// Print a staircase of size n using # symbols and spaces.
// Note: The last line must have 0 spaces in it.

// Sample Input
// 6

// Sample Output
//      #
//     ##
//    ###
//   ####
//  #####
// ######

// Explanation
// The staircase is right - aligned, composed of # symbols and spaces,
// and has a height and width of n=6.

"use strict";

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

// Complete the staircase function below.
function staircase(n) {
  // 정답을 담을 변수
  let stair = "";
  // n은 1부터 n과 같거나 작으면
  for (let i = 1; i <= n; i++) {
    // 공백(' ')을 입력해야할 수
    let blankCount = n - i;
    // stair(#)을 입력해야할 수
    let stairCount = i;
    // 공백을 입력해야할 수만큼
    while (blankCount > 0) {
      // 먼저 공백입력 (right-align 때문)
      stair += " ";
      // 무한루프 방지
      blankCount--;
    }
    // stair을 입력해야할 수만큼
    while (stairCount > 0) {
      // stair 입력
      stair += "#";
      // 무한루프 방지
      stairCount--;
    }
    // 개행
    stair += "\n";
  }
  // 정답 도출
  console.log(stair);
}

function main() {
  const n = parseInt(readLine(), 10);

  staircase(n);
}
