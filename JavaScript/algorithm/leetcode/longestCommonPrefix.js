// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog", "racecar", "car"]
// Output: ""

// Explanation: There is no common prefix among the input strings.

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower -case English letters.




/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let answer = ''
    let minStr = null;

    for (let i = 0; i < strs.length; i++) {
        if (minStr === null) {
            minStr = strs[i];
            continue;
        }

        if (minStr.length > strs[i].length) {
            minStr = strs[i];
        }
    }

    if (minStr === null) {
        return ''
    }

    for (let k = 0; k < minStr.length; k++) {
        if (strs.every(str => str[k] === minStr[k])) {
            answer += minStr[k];
            continue;
        }

        return answer
    }

    return answer;
};
