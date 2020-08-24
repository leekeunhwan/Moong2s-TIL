// Sami's spaceship crashed on Mars!
// She sends a series of SOS messages to Earth for help.

// Letters in some of the SOS messages are altered by cosmic radiation during transmission.
// Given the signal received by Earth as a string, s,
// determine how many letters of Sami's SOS have been changed by radiation.

// For example, Earth receives SOSTOT. Sami's original message was SOSSOS.
// Two of the message characters were changed in transit.

// Function Description

// Complete the marsExploration function in the editor below.
// It should return an integer representing the number of letters changed during transmission.

// marsExploration has the following parameter(s):
// s: the string as received on Earth

// Input Format
// There is one line of input: a single string, s.
// Note: As the original message is just SOS repeated n times, s's length will be a multiple of 3.

// Constraints
// 1 <= s.lenght <= 99
// s.length % 3 = 0
// s will contain only uppercase English letters, ascii[A-Z].

// Output Format
// Print the number of letters in Sami's message that were altered by cosmic radiation.

// Sample Input 0
// SOSSPSSQSSOR

// Sample Output 0
// 3

// Explanation 0

// s = SOSSPSSQSSOR, and signal length |s| = 12. Sami sent 4 SOS messages (i.e.: 12/3 = 4).

// Expected signal: SOSSOSSOSSOS
// Recieved signal: SOSSPSSQSSOR
// Difference:          X  X   X

// We print the number of changed letters.

// Sample Input 1
// SOSSOT

// Sample Output 1
// 1

// Explanation 1
// s = SOSSOT, and signal length |s| = 6. Sami sent 2 SOS messages (i.e.: 6/3 = 2).

// Expected Signal: SOSSOS
// Received Signal: SOSSOT
// Difference:           X

// We print the number of changed letters, which is 1.

// Sample Input 2
// SOSSOSSOS

// Sample Output 2
// 0

// Explanation 2
// Since no character is altered, we print 0.

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

// Complete the marsExploration function below.
function marsExploration(s) {
  let copyS = s;
  let sliceStart = 0;
  let sliceTarget = 3;
  let correctChar = "SOS";
  let wrongCharCounter = 0;

  while (copyS.length >= sliceTarget) {
    const testTarget = copyS.slice(sliceStart, sliceTarget);

    if (testTarget === correctChar) {
      sliceStart += 3;
      sliceTarget += 3;
    } else {
      for (let i = 0; i < testTarget.length; i++) {
        if (testTarget[i] !== correctChar[i]) {
          wrongCharCounter += 1;
        }
      }

      sliceStart += 3;
      sliceTarget += 3;
    }
  }

  return wrongCharCounter;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = marsExploration(s);

  ws.write(result + "\n");

  ws.end();
}
