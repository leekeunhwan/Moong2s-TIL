// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Example 3:
// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// Constraints:

// 2 <= nums.length <= 10^3
// - 10^9 <= nums[i] <= 10^9
// - 10^9 <= target <= 10^9
// Only one valid answer exists.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const copyNums = [...nums];
    let index = 0;
    let firstTarget = copyNums[index];
    copyNums.shift();

    while (true) {
        if (copyNums.includes(target - firstTarget)) {
            const first = nums.findIndex(num => num === firstTarget);
            nums.splice(first, 1, '');
            const second = nums.findIndex(num => num === target - firstTarget);

            return [first, second]
        }
        firstTarget = copyNums[index];
        copyNums.shift();
    }

};


// 시간을 8분잡고 풀어봤는데
// 통과는 했지만, 좋은 코드는 아니다.
// 빠르면서도 퀄리티있는 좋은 코드를 짜기 위해 노력해야곘다.