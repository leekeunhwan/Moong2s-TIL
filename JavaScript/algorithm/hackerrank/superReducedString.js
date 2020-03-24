// Steve has a string of lowercase characters in range ascii[‘a’..’z’].
// He wants to reduce the string to its shortest length by doing a series of operations.
// In each operation he selects a pair of adjacent lowercase letters that match, and he deletes them.
// For instance, the string aab could be shortened to b in one operation.

// Steve’s task is to delete as many characters as possible using this method and print the resulting string.
// If the final string is empty, print Empty String

// Function Description
// Complete the superReducedString function in the editor below.
// It should return the super reduced string or Empty String if the final string is empty.
// superReducedString has the following parameter(s):
// s: a string to reduce

// Input Format
// A single string, s.

// Constraints
// 1 <= s <= 100

// Output Format
// If the final string is empty, print Empty String; otherwise, print the final non - reducible string.

// Sample Input 0
// aaabccddd

// Sample Output 0
// abd

// Explanation 0
// Steve performs the following sequence of operations to get the final string:
// aaabccddd → abccddd → abddd → abd

// Sample Input 1
// aa

// Sample Output 1
// Empty String

// Explanation 1
// aa → Empty String

// Sample Input 2
// baab

// Sample Output 2
// Empty String

// Explanation 2
// baab → bb → Empty String

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

// Complete the superReducedString function below.
function superReducedString(s) {
  const splitedStrArr = s.split("");
  let index = 0;

  while (splitedStrArr.length > index) {
    if (splitedStrArr[index] === splitedStrArr[index + 1]) {
      splitedStrArr.splice(index, 2);
    } else if (splitedStrArr[index] === splitedStrArr[index - 1]) {
      splitedStrArr.splice(index - 1, 2);
      index--;
    } else {
      index++;
    }
  }

  return splitedStrArr.length === 0 ? "Empty String" : splitedStrArr.join("");
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const result = superReducedString(s);

  ws.write(result + "\n");

  ws.end();
}
