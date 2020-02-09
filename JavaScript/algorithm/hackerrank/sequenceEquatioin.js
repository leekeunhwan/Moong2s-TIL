// Given a sequence of n integers, p(1), p(2),..., p(n) where each element is distinct and satisfies 1 <= p(x) <= n.
// For each x where 1 <= x <= n, find any integer y such that p(p(y)) = x and print the value of y on a new line.

// For example, assume the sequence p = [ 5, 2, 1, 3, 4 ].
// Each value of x between 1 and 5, the length of the sequence, is analyzed as follows:

// x = 1 = p[3], p[4] = 3 so p[p[4]] = 1
// x = 2 = p[2], p[2] = 2 so p[p[2]] = 2
// x = 3 = p[4], p[5] = 4 so p[p[5]] = 3
// x = 4 = p[5], p[1] = 5 so p[p[1]] = 4
// x = 5 = p[1], p[3] = 1 so p[p[3]] = 5
// The values for y are [ 4, 2, 5, 1, 3 ].

// Function Description
// Complete the permutationEquation function in the editor below.
// It should return an array of integers that represent the values of y.
// permutationEquation has the following parameter(s):
// p: an array of integers

// Input Format
// The first line contains an integer n, the number of elements in the sequence.
// The second line contains n space-separated integers p[i] where 1 <= i <= n.

// Constraints
// 1 <= n <= 50
// 1 <= p[i] <= 50, where 1 <= i <= n.
// Each element in the sequence is distinct.

// Output Format
// For each x from 1 to n, print an integer denoting any valid y satisfying the equation p(p(y)) = x on a new line.

// Sample Input 0
// 3
// 2 3 1

// Sample Output 0
// 2
// 3
// 1

// Explanation 0
// Given the values of p(1) = 2, p(2) = 3, and p(3) = 1, we calculate and print the following values for each x from 1 to n:
// x = 1 = p(3) = p(p(2)) = p(p(y)), so we print the value of y = 2 on a new line.
// x = 2 = p(1) = p(p(3)) = p(p(y)), so we print the value of y = 3 on a new line.
// x = 3 = p(2) = p(p(1)) = p(p(y)), so we print the value of y = 1 on a new line.

// Sample Input 1
// 5
// 4 3 5 1 2

// Sample Output 1
// 1
// 3
// 5
// 4
// 2

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

// Complete the permutationEquation function below.
function permutationEquation(p) {
  // 정답을 담을 변수 선언
  const answer = [];
  // 주어진 배열을 순회하면서
  for (let i = 0; i < p.length; i++) {
    // x은 1부터 n까지이기에
    // 일단 x값에 해당하는 index를 찾는다.
    const xIndex = p.findIndex(item => item === i + 1);
    // x값에 해당하는 순서(1부터 세기에 index+1)와 같은 index를 찾는다.
    const matchSequence = p.findIndex(item => item === xIndex + 1) + 1;
    // 정답에 넣어준다.
    answer.push(matchSequence);
  }
  // 정답 출력
  return answer;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const p = readLine()
    .split(" ")
    .map(pTemp => parseInt(pTemp, 10));

  let result = permutationEquation(p);

  ws.write(result.join("\n") + "\n");

  ws.end();
}

// 한번 손코딩으로 풀어봤는데..
// IDE는 결과를 보고 수정할 수 있는 반면
// 철저히 손코딩은 그렇기 힘드니 수렁에 빠지게 되는것 같다.
// 추후에도 꾸준히 손코딩은 해봐야겠다.
