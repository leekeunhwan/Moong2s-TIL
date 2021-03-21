// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a = [1, 2, 3, 4, 3, 2, 1]
// The unique element is 4.

// Function Description
// Complete the lonelyinteger function in the editor below.
// lonelyinteger has the following parameter(s):
// int a[n]: an array of integers

// Returns
// int: the element that occurs only once

// Input Format
// The first line contains a single integer, n, the number of integers in the array.
// The second line contains n space - separated integers that describe the values in a.

// Constraints
// 1 <= n < 100
// It is guaranteed that n is an odd number and that there is one unique element.
// 0 < a[i] <= 100, where 0 <= i < n.

// Sample Input 0
// 1
// 1

// Sample Output 0
// 1

// Explanation 0
// There is only one element in the array, thus it is unique.

// Sample Input 1
// 3
// 1 1 2

// Sample Output 1
// 2

// Explanation 1
// We have two 1's, and 2 is unique.

// Sample Input 2
// 5
// 0 0 1 2 1

// Sample Output 2
// 2

// Explanation 2
// We have two 0's, two 1's, and one 2. 
// 2 is unique.

function lonelyinteger(a) {
    let answer;
    const removeDupArr = [...new Set(a)];
    removeDupArr.forEach((unit) => {
        if (a.filter(element => element === unit).length === 1) {
            answer = unit;
        }
    })

    return answer
}
