// Amanda has a string of lowercase letters that she wants to copy to a new string.
// She can perform the following operations with the given costs.
// She can perform them any number of times to construct a new string p:
// Append a character to the end of string p at a cost of 1 dollar.
// Choose any substring of p and append it to the end of p at no charge.

// Given n strings, find and print the minimum cost of copying each s[i] to p[i] on a new line.
// For example, given a string s = abcabc, it can be copied for 3 dollars.
// Start by copying, a, b and c individually at a cost of 1 dollar per character.
// String p = abc at this time.
// Copy p[0:2] to the end of p at no cost to complete the copy.

// Function Description
// Complete the stringConstruction function in the editor below.
// It should return the minimum cost of copying a string.

// stringConstruction has the following parameter(s):
// s: a string

// Input Format
// The first line contains a single integer n, the number of strings.
// Each of the next n lines contains a single string, s[i].

// Constraints
// 1 <= n <= 5
// 1 <= s[i] <= 10^5

// Subtasks
// 1 <= s[i] <= 10^3 for 45% of the maximum score.

// Output Format
// For each string s[i] print the minimum cost of constructing a new string p[i] on a new line.

// Sample Input
// 2
// abcd
// abab

// Sample Output
// 4
// 2

// Explanation
// Query 0: We start with s="abcd" and p="".

// Append character 'a' to p at a cost of 1 dollar, p = "a".
// Append character 'b' to p at a cost of 1 dollar, p = "ab".
// Append character 'c' to p at a cost of 1 dollar, p = 'abc".
// Append character 'd' to p at a cost of 1 dollar, p = "abcd".
// Because the total cost of all operations is 1+1+1+1 = 4 dollars, we print 4 on a new line.

// Query 1: We start with s="abab" and p="".

// Append character 'a' to p at a cost of 1 dollar, p = "a".
// Append character 'b' to p at a cost of 1 dollar, p = "ab".
// Append substring "ab" to p at no cost, p = "abab".
// Because the total cost of all operations is 1+1 = 2 dollars, we print 2 on a new line.

// Note

// A substring of a string S is another string S that occurs "in"(Wikipedia).
// For example, the substrings of the string "abc" are "a", "b", "c", "ab", "bc", and "abc".

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the stringConstruction function below.
function stringConstruction(s) {
  const splitedArr = s.split("");
  return [...new Set(splitedArr)].length;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = stringConstruction(s);

    ws.write(result + "\n");
  }

  ws.end();
}
