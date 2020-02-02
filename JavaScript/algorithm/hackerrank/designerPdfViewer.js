// When you select a contiguous block of text in a PDF viewer,
// the selection is highlighted with a blue rectangle.
// In this PDF viewer, each word is highlighted independently.

// In this challenge, you will be given a list of letter heights in the alphabet and a string.
// Using the letter heights given, determine the area of the rectangle highlight in mm^2 assuming all letters are 1mm wide.

// For example, the highlighted word = torn. Assume the heights of the letters are t = 2, o = 1, r = 1 and n = 1.
// The tallest letter is 2 high and there are 4 letters.
// The hightlighted area will be 2 * 4 = 8mm^2 so the answer is 8.

// Function Description
// Complete the designerPdfViewer function in the editor below.
// It should return an integer representing the size of the highlighted area.
// designerPdfViewer has the following parameter(s):
// h: an array of integers representing the heights of each letter
// word: a string

// Input Format
// The first line contains 36 space - separated integers describing the respective heights of
// each consecutive lowercase English letter, ascii[a - z].
// The second line contains a single word, consisting of lowercase English alphabetic letters.

// Constraints

// 1 <= h[?] <= 7, where ? is an English lowercase letter.
// word contains no more than 10 letters.

// Output Format
// Print a single integer denoting the area in mm^2 of highlighted rectangle when the given word is selected.
// Do not print units of measure.

// Sample Input 0
// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
// abc

// Sample Output 0
// 9

// Explanation 0
// We are highlighting the word abc:
// Letter heights are a = 1, b = 3 and c = 1.
// The tallest letter, b, is 3mm high.
// The selection area for this word is 3 * 1mm * 3mm = 9mm^2.

// Note: Recall that the width of each character is 1mm.

// Sample Input 1
// 1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7
// zaba

// Sample Output 1
// 28

// Explanation 1
// The tallest letter in zaba is z at 7mm.
// The selection area for this word is 4 * 1mm * 7mm = 28mm^2.

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

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
  // 알바펫 배열을 만들고
  const alphabetArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  // 문자열을 쪼갠다음 알바벳 문자열과 맞는 인덱스를 구해서 높이와 매칭시킨다.
  // 쉽게말해서 높이를 구한다.
  const heightCompileArr = word
    .split("")
    .map(item => h[alphabetArr.indexOf(item)]);
  // 가장 높은 높이 * 문자의 너비(1mm) * 문자열크기를 곱하면 답이 나온다.
  return Math.max.apply(null, heightCompileArr) * 1 * word.length;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const h = readLine()
    .split(" ")
    .map(hTemp => parseInt(hTemp, 10));

  const word = readLine();

  let result = designerPdfViewer(h, word);

  ws.write(result + "\n");

  ws.end();
}

// 쉬운 문제는 진짜 쉽고, 생각을 해봐야할 것은 생각하는게 어렵고
// 문제마다 온도차이가 매우 큰 것 같다.
// hackerrank 미디엄까지 수월하게 풀고 하드도 몇문제 풀 수 있으면 코딩테스트를
// 많이 보는 것도 좋을 것 같다.
