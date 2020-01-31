// Two cats and a mouse are at various positions on a line.
// You will be given their starting positions.
// Your task is to determine which cat will reach the mouse first,
// assuming the mouse doesn't move and the cats travel at equal speed.
// If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given q queries in the form of x, y, and z representing the respective positions for cats A and, B and for mouse C.
// Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.
// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
// For example, cat A is at position  x = 2 and cat B is at y = 5.
// If mouse C is at position z = 4, it is 2 units from cat A and 1 unit from cat B.
// Cat B will catch the mouse.

// Function Description
// Complete the catAndMouse function in the editor below.
// It should return one of the three strings as described.
// catAndMouse has the following parameter(s):
// x: an integer, Cat A's position
// y: an integer, Cat B's position
// z: an integer, Mouse C's position

// Input Format
// The first line contains a single integer, q, denoting the number of queries.
// Each of the q subsequent lines contains three space - separated integers describing the respective values of x (cat A's location),
// y (cat B's location), and z (mouse C's location).

// Constraints
// 1 <= q <= 100
// 1 <= x, y, z <= 100

// Output Format
// For each query, return Cat A if cat A catches the mouse first,
// Cat B if cat B catches the mouse first, or Mouse C if the mouse escapes.

// Sample Input 0
// 2
// 1 2 3
// 1 3 2

// Sample Output 0
// Cat B
// Mouse C

// Explanation 0
// Query 0: The positions of the cats and mouse are shown below:
// Cat B will catch the mouse first, so we print Cat B on a new line.
// Query 1: In this query, cats A and B reach mouse C at the exact same time:
// Because the mouse escapes, we print Mouse C on a new line.

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

// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  // 고양이 A와 마우스의 거리를 구한다
  const catADiff = Math.abs(z - x);
  // 고양이 B와 마우스의 거리를 구한다
  const catBDiff = Math.abs(z - y);
  // 고양이 A와 마우스의 거리와 고양이 B와 마우스의 거리가 같으면
  return catADiff === catBDiff
    ? // 동시에 잡으니까 Mouse C
      "Mouse C"
    : // 고양이 A와 마우스의 거리가 고양이 B와 마우스의 거리보다 크다면 (멀다면)
    catADiff > catBDiff
    ? // 고양이 B가 빨리잡으니까 Cat B
      "Cat B"
    : // 아니면 Cat A
      "Cat A";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const xyz = readLine().split(" ");

    const x = parseInt(xyz[0], 10);

    const y = parseInt(xyz[1], 10);

    const z = parseInt(xyz[2], 10);

    let result = catAndMouse(x, y, z);

    ws.write(result + "\n");
  }

  ws.end();
}

// 그냥 독해문제..
// 코드는 뭐 어려운건 없었다.

// Math.abs는 데이터 값만 추출하여 사용가능하다.
// 음수를 양수화하는데 좋음
