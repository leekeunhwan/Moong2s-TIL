// You are given a string containing characters A and B only.
// Your task is to change it into a string such that there are no matching adjacent characters.
// To do this, you are allowed to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Example
// s = AABAAB
// Remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.

// Function Description
// Complete the alternatingCharacters function in the editor below.
// alternatingCharacters has the following parameter(s):
// string s: a string

// Returns
// int: the minimum number of deletions required

// Input Format
// The first line contains an integer q, the number of queries.
// The next q lines each contain a string s to analyze.

// Constraints
// 1 <= q <= 10
// 1 <= length of s <= 10^5
// Each string s will consist only of characters A and B.

// Sample Input
// 5
// AAAA
// BBBBB
// ABABABAB
// BABABA
// AAABBB

// Sample Output
// 3
// 4
// 0
// 0
// 4

// Explanation
// The characters marked red are the ones that can be deleted 
// so that the string does not have matching adjacent characters.

function alternatingCharacters(s) {
    let count = 0;
    let latestChar = s[0];

    for (let i = 1; i < s.length; i++) {
        if (latestChar === s[i]) {
            count++;
            continue;
        }

        latestChar = s[i]
    }

    return count;
}