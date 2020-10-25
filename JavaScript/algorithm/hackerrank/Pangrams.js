// Roy wanted to increase his typing speed for programming contests. 
// His friend suggested that he type the sentence "The quick brown fox jumps over the lazy dog" repeatedly. 
// This sentence is known as a pangram because it contains every letter of the alphabet.

// After typing the sentence several times, Roy became bored with it so he started to look for other pangrams.
// Given a sentence, determine whether it is a pangram. Ignore case.

// Function Description
// Complete the function pangrams in the editor below. 
// It should return the string pangram if the input string is a pangram. 
// Otherwise, it should return not pangram.

// pangrams has the following parameter(s):
// s: a string to test

// Input Format
// Input consists of a string s.

// Constraints
// 0 < |s| <= 10^3
 
// Output Format
// Output a line containing pangram if s is a pangram, otherwise output not pangram.

// Sample Input 0
// We promptly judged antique ivory buckles for the next prize

// Sample Output 0
// pangram

// Sample Explanation 0
// All of the letters of the alphabet are present in the string.

// Sample Input 1
// We promptly judged antique ivory buckles for the prize

// Sample Output 1
// not pangram

// Sample Explanation 0
// The string lacks an x.


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the pangrams function below.
function pangrams(s) {
    const lowerString = s.toLowerCase();
    let answer = false;
    let checkAlphabet = 'a';
    let checkProgressFlag = true;

    while(checkProgressFlag) {
        if (!lowerString.includes(checkAlphabet)) {
            checkProgressFlag = false;
        }

        if (checkAlphabet !== 'z') {
            checkAlphabet = String.fromCharCode(checkAlphabet.charCodeAt() + 1);
        } else {
            checkProgressFlag = false;
            answer = true;
        }
    }

    return answer ? 'pangram' : 'not pangram'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = pangrams(s);

    ws.write(result + "\n");

    ws.end();
}
