// Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.
// For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac,
// the first 10 characters of her infinite string.
// There are 4 occurrences of a in the substring.

// Function Description
// Complete the repeatedString function in the editor below.
// It should return an integer representing the number of occurrences of a
// in the prefix of length n in the infinitely repeating string.

// repeatedString has the following parameter(s):
// s: a string to repeat
// n: the number of characters to consider

// Input Format
// The first line contains a single string, s.
// The second line contains an integer, n.

// Constraints
// 1 <= |s| <= 100
// 1 <= n <= 10^12
// For 25% of the test cases, n <= 10^6.

// Output Format
// Print a single integer denoting the number of letter a's in the first n letters of the infinite string
// created by repeating s infinitely many times.

// Sample Input 0
// aba
// 10

// Sample Output 0
// 7

// Explanation 0
// The first n = 10 letters of the infinite string are abaabaabaa.Because there are 7 a's, we print 7 on a new line.

// Sample Input 1
// a
// 1000000000000

// Sample Output 1
// 1000000000000

// Explanation 1
// Because all of the first n = 1000000000000 letters of the infinite string are a, we print 1000000000000 on a new line.

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

// Complete the repeatedString function below.
function repeatedString(s, n) {
  const repeatCount = parseInt(n / s.length);
  const restRepeat = n % s.length;
  const sInAcount = s.split("").filter(item => item === "a").length;

  return (
    sInAcount * repeatCount +
    s
      .split("")
      .slice(0, restRepeat)
      .filter(item => item === "a").length
  );
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const n = parseInt(readLine(), 10);

  let result = repeatedString(s, n);

  ws.write(result + "\n");

  ws.end();
}

// 직접 문자열을 붙이고, 거기서 a를 찾는 제일 쉬운 방법은 시간복잡도를 넘지못했다.
// 문자열을 붙이기전에 계산하는 방법으로 풀다보니 저래 풀렸다.
// 보통 나와 비슷한 접근으로 다른 분들도 푼 것 같다.

// 이렇게 정규식으로 푸는 분들도 있는 듯하다.
// function repeatedString(s, n) {
//     const count = (s) => s.replace(/[^a]/g, '').length;
//     return count(s) * (parseInt(n / s.length)) +
//         count(s.substr(0, n % s.length));
// }
