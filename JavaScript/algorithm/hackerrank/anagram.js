// Two words are anagrams of one another if their letters can be rearranged to form the other word.
// Given a string, split it into two contiguous substrings of equal length. 
// Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

// Example
// s = abccde
// Break  into two parts: 'abc' and 'cde'. Note that all letters have been used, 
// the substrings are contiguous and their lengths are equal.
// Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams.
// Two changes were necessary.

// Function Description
// Complete the anagram function in the editor below.
// anagram has the following parameter(s):
// string s: a string

// Returns
// int: the minimum number of characters to change or -1.

// Input Format
// The first line will contain an integer, q, the number of test cases.
// Each test case will contain a string s.

// Constraints
// 1 <= q <= 100
// 1 <= |s| <= 10^4
// s consists only of characters in the range ascii[a-z].

// Sample Input
// 6
// aaabbb
// ab
// abc
// mnop
// xyyx
// xaxbbbxx

// Sample Output
// 3
// 1
// -1
// 2
// 0
// 1

// Explanation

// Test Case #01: We split s into two strings S1='aaa' and S2='bbb'. 
// We have to replace all three characters from the first string with 'b' to make the strings anagrams.

// Test Case #02: You have to replace 'a' with 'b', which will generate "bb".

// Test Case #03: It is not possible for two strings of unequal length to be anagrams of one another.

// Test Case #04: We have to replace both the characters of first string ("mn") to make it an anagram of the other one.

// Test Case #05: S1 and S2 are already anagrams of one another.

// Test Case #06: Here S1 = "xaxb" and S2 = "bbxx". You must replace 'a' from S1 with 'b' so that S1 = "xbxb".


function anagram(s) {
    const stringSize = s.length;

    if (stringSize % 2 !== 0) {
        return -1
    }

    const sliceTarget = stringSize / 2;
    let firstStr = s.slice(0, sliceTarget);
    const secondStr = s.slice(sliceTarget, stringSize);
    let answer = 0;

    for (let i = 0; i < sliceTarget; i++) {
        if (firstStr.includes(secondStr[i])) {
            firstStr = firstStr.replace(secondStr[i], "");
            continue;
        }

        answer++;
    }

    return answer;
}