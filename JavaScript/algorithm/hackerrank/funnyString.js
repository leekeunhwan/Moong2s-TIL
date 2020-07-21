// In this challenge, you will determine whether a string is funny or not. 
// To determine whether a string is funny, create a copy of the string in reverse e.g. abc -> cba. 
// Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 0 and 1, 
// 1 and 2 and so on to the end. If the list of absolute differences is the same for both strings, they are funny.

// Determine whether a give string is funny. If it is, return Funny, otherwise return Not Funny.

// For example, given the string s = lmnop, the ordinal values of the charcters are [108, 109, 110, 111, 112]. s(reverse) = ponml  and the ordinals are [112, 111, 110, 109, 108]. 
// The absolute differences of the adjacent elements for both strings are [1,1,1,1], so the answer is Funny.

// Function Description

// Complete the funnyString function in the editor below. 
// For each test case, it should return a string, either Funny or Not Funny.
// funnyString has the following parameter(s):
// s: a string to test

// Input Format
// The first line contains an integer q, the number of queries.
// The next q lines each contain a string, s.

// Constraints
// 1 <= q <= 10
// 2 <= s <= 100000

// Output Format
// For each string  print whether it is Funny or Not Funny on a new line.

// Sample Input
// 2
// acxz
// bcxz

// Sample Output
// Funny
// Not Funny

// Explanation
// You can use r to store the reverse of s.

// Test Case 0:
// s = acxz, r = zxca, 
// Corresponding ASCII values of characters of the strings:
// s = [97, 99, 120, 122] and [122, 120, 99, 97]
// For both the strings the adjacent difference list is [2, 21, 2] so we print Funny.

// Test Case 1:

// s = bcxz, r = zxcb, 
// Corresponding ASCII values of characters of the strings:
// s = [98, 99, 120, 122] and [122, 120, 99, 98]
// The adjacent difference list for string s is [1, 21, 2] and for string r it is [2, 21, 1]. Since they are not the same we print Not Funny.

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

// Complete the funnyString function below.
function funnyString(s) {
    let flag = false;
    const forwardArr = s.split('').map(item => item.charCodeAt());
    const reverseArr = s.split('').reverse().map(item => item.charCodeAt());

    for (let i=0; i<forwardArr.length; i++) {
        if (forwardArr[i+1] != undefined && reverseArr[i+1] != undefined) {
            if (Math.abs(forwardArr[i+1] - forwardArr[i]) 
                === Math.abs(reverseArr[i+1] - reverseArr[i])) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }

    return flag ? 'Funny' : 'Not Funny'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
