// 1480. Running Sum of 1d Array
// Easy

// 732

// 74

// Add to List

// Share
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sumArr = [];
    
    for (let i = nums.length - 1; i >= 0; i--) {
        let sum = nums[i];
        
        for (j = i - 1; j >= 0; j--) {
            sum += nums[j];
        }
        
        sumArr.unshift(sum);
    }
    
    return sumArr;
};

// faster version

var runningSum = function(nums) {
    for(let i = 1;i < nums.length; i++){
        nums[i] += nums[i - 1];
    }
    return nums;
};

// 1. Two Sum
// Easy

// 17918

// 642

// Add to List

// Share
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = function(nums, target) {
    
    for (let i = 0 ; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i,j];
        }
    }
    
};

// O(n)

var twoSum = function(nums, target) {
    let numMap = new Map;
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
};
