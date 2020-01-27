// Lily has a chocolate bar that she wants to share it with Ron for his birthday.
// Each of the squares has an integer on it.
// She decides to share a contiguous segment of the bar selected such that
// the length of the segment matches Ron's birth month and the sum of the integers
// on the squares is equal to his birth day.
// You must determine how many ways she can divide the chocolate.

// Consider the chocolate bar as an array of squares, s = [2,2,1,3,2].
// She wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2.
// In this case, there are two segments meeting her criteria: [2,2] and [1,3].

// Function Description
// Complete the birthday function in the editor below.
// It should return an integer denoting the number of ways Lily can divide the chocolate bar.
// birthday has the following parameter(s):
// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month

// Input Format
// The first line contains an integer n, the number of squares in the chocolate bar.
// The second line contains n space - separated integers s[i], the numbers on the chocolate squares where 0 <= i < n.
// The third line contains two space - separated integers, d and m, Ron's birth day and his birth month.

// Constraints
// 1 <= n <= 100
// 1 <= s[i] <= 5, where (0 <= i < n)
// 1 <= d <= 31
// 1 <= m <= 12

// Output Format
// Print an integer denoting the total number of ways that Lily can portion her chocolate bar to share with Ron.

// Sample Input 0
// 5
// 1 2 1 3 2
// 3 2

// Sample Output 0
// 2

// Explanation 0
// Lily wants to give Ron m = 2 squares summing to d = 3.
// The following two segments meet the criteria:

// Sample Input 1
// 6
// 1 1 1 1 1 1
// 3 2

// Sample Output 1
// 0

// Explanation 1
// Lily only wants to give Ron m = 2 consecutive squares of chocolate whose integers sum to d = 3.
// There are no possible pieces satisfying these constraints:
// Thus, we print 0 as our answer.

// Sample Input 2
// 1
// 4
// 4 1

// Sample Output 2
// 1

// Explanation 2
// Lily only wants to give Ron m = 1 square of chocolate with an integer value of d = 4.
// Because the only square of chocolate in the bar satisfies this constraint, we print 1 as our answer.

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

// Complete the birthday function below.
function birthday(s, d, m) {
  // 정답을 나타낼 변수
  let answer = 0;
  // 초콜릿 사이즈에서 자를 것을 빼준다음 돈다.
  for (let i = 0; i < s.length - m + 1; i++) {
    // 만약 초콜릿을 자른 것의 합이 d와 같으면 정답 카운트 업
    if (s.slice(i, i + m).reduce((a, b) => a + b, 0) === d) answer++;
  }
  // 정답 노출
  return answer;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const s = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(sTemp => parseInt(sTemp, 10));

  const dm = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const d = parseInt(dm[0], 10);

  const m = parseInt(dm[1], 10);

  const result = birthday(s, d, m);

  ws.write(result + "\n");

  ws.end();
}

// 초콜릿을 잘랐다가 붙이는 조건이 없는데
// 왜 뇌피셜에 입각해서 계산을 하는지..
// 문제를 잘 읽고, 딱 정해진 것만 구현하는 습관이 필요할 것 같다.
