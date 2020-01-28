// Alice wrote a sequence of words in CamelCase as a string of letters, s, having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given s, print the number of words in s on a new line.

// For example, s = oneTwoThree.
// There are 3 words in the string.

// Function Description

// Complete the camelcase function in the editor below.
// It must return the integer number of words in the input string.
// camelcase has the following parameter(s):
// s: the string to analyze

// Input Format
// A single line containing string s.

// Constraints
// 1 <= |s| <= 10^5

// Output Format
// Print the number of words in string s.

// Sample Input
// saveChangesInTheEditor

// Sample Output
// 5

// Explanation
// String s contains five words:
// save
// Changes
// In
// The
// Editor

// Thus, we print 5 on a new line.

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

// Complete the camelcase function below.
function camelcase(s) {
  // 정규식으로 자르고 길이 반환
  return s.split(/[A-Z]/).length;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = camelcase(s);

  ws.write(result + "\n");

  ws.end();
}

// 정규식을 쓰면 편하다.
