// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. 
// From right to left, it becomes 121 -. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false

// Constraints:
// -2^31 <= x <= 2^31-1



/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const copyX = x.toString().split('');

    while (copyX.length > 1) {
        if (copyX[0] === copyX[copyX.length - 1]) {
            copyX.pop();
            copyX.shift();
            continue;
        }

        return false;
    }

    return copyX.length > 2 ? false : true;
};