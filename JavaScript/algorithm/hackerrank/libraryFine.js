// Your local library needs your help!
// Given the expected and actual return dates for a library book,
// create a program that calculates the fine(if any).
// The fee structure is as follows:

// If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0.)
// If the book is returned after the expected return day
// but still within the same calendar month and year as the expected return date, fine = 15 Hackos * (the number of days late).
// If the book is returned after the expected return month
// but still within the same calendar year as the expected return date, the fine = 500 Hackos * (the number of months late).
// If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.
// Charges are based only on the least precise measure of lateness.
// For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018,
// that is a year late and the fine would be 10,000 Hackos.

// Function Description
// Complete the libraryFine function in the editor below.
// It must return an integer representing the fine due.

// libraryFine has the following parameter(s):
// d1, m1, y1: returned date day, month and year
// d2, m2, y2: due date day, month and year

// Input Format
// The first line contains 3 space - separated integers, d1, m1, y1,
// denoting the respective day, month, and  year on which the book was returned.
// The second line contains 3 space - separated integers, d2, m2, y2,
// denoting the respective day, month, and year on which the book was due to be returned.

// Constraints
// 1 <= d1, d2 <= 31
// 1 <= m1, m2 <= 12
// 1 <= y1, y2 <= 3000
// It is guaranteed that the dates will be valid Gregorian calendar dates.

// Output Format
// Print a single integer denoting the library fine for the book received as input.

// Sample Input
// 9 6 2015
// 6 6 2015

// Sample Output
// 45

// Explanation
// Given the following dates:
// Returned: d1 = 9, m1 = 6, y1 = 2015
// Due: d2 = 6, m2 = 6, y2 = 2015
// Because y2 === y1, we know it is less than a year late.
// Because m2 === m1, we know it's less than a month late.
// Because d2 < d1, we know that it was returned late(but still within the same month and year).

// Per the library's fee structure, we know that our fine will be 15 Hackos * (# days late).
// We then print the result of 15 * (d1 - d2) = 15 * (9 - 6) = 45 as our output.

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

// Complete the libraryFine function below.
function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine = 0;
  if (y1 - y2 > 0) {
    fine += 10000;
  } else if ((y1 - y2 > 0 || y1 - y2 === 0) && m1 - m2 > 0) {
    fine += 500 * (m1 - m2);
  } else if (
    (y1 - y2 > 0 || y1 - y2 === 0) &&
    (m1 - m2 > 0 || m1 - m2 === 0) &&
    d1 - d2 > 0
  ) {
    fine += 15 * (d1 - d2);
  }

  return fine;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const d1M1Y1 = readLine().split(" ");

  const d1 = parseInt(d1M1Y1[0], 10);

  const m1 = parseInt(d1M1Y1[1], 10);

  const y1 = parseInt(d1M1Y1[2], 10);

  const d2M2Y2 = readLine().split(" ");

  const d2 = parseInt(d2M2Y2[0], 10);

  const m2 = parseInt(d2M2Y2[1], 10);

  const y2 = parseInt(d2M2Y2[2], 10);

  let result = libraryFine(d1, m1, y1, d2, m2, y2);

  ws.write(result + "\n");

  ws.end();
}
