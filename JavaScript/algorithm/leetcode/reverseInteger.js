// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers(signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

// Constraints:

// -2^31 <= x <= 2^ 31 - 1  

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    const strNum = x.toString().split('');

    if (strNum[0] === '-') {
        strNum.shift();
        const answer = Number('-' + strNum.reverse().join(''));
        if (Math.pow(-2, 31) > answer) {
            return 0
        }
        return answer;
    }

    const answer = Number(strNum.reverse().join(''));

    if (Math.pow(2, 31) - 1 < answer) {
        return 0
    }

    return Number(answer);
};