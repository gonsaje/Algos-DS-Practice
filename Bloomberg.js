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

// space complexity: O(n) => sumArr's size is dependent on the size of the argument
// time complexity: O(n^2) nested loop
var runningSum = function(nums) {
    let sumArr = []; // O(n) 
    
    for (let i = nums.length - 1; i >= 0; i--) { //O(n)
        let sum = nums[i];
        
        for (j = i - 1; j >= 0; j--) { // O(n)
            sum += nums[j];
        }
        
        sumArr.unshift(sum);
    }
    
    return sumArr;
};

// faster version
// space complexity: O(1) => we're modifying the original array and therefore not changing space
// time complexity: O(n) => we're looping through once  

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



// 1431. Kids With the Greatest Number of Candies
// Easy

// For each kid check if there is a way to distribute extraCandies among the 
// kids such that he or she can have the greatest number of candies among them. 
// Notice that multiple kids can have the greatest number of candies.


// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: 
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
// Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
// Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
// Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
 

// Constraints:

// 2 <= candies.length <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50

var kidsWithCandies = function(candies, extraCandies) {
    let result = [];
    let max = Math.max(...candies); // O(n)
    
    for (let i = 0; i < candies.length; i++) { // O(n)
        candies[i] + extraCandies >= max ? result.push(true) : result.push(false);     
    }
    
    return result;
};

// 20. Valid Parentheses
// Easy

// 6158

// 250

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function(s) {
    if (s.length < 2) return false;
    
    const closeParen = {
        ")" : "(",
        "]" : "[",    
        "}" : "{"
    }
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let last = stack[stack.length - 1];
        
        if ("([{".includes(s[i])) {
            stack.push(s[i])
        } else if (closeParen[s[i]] && last === closeParen[s[i]]) {
            stack.pop();
        } else if ((closeParen[s[i]] && stack.length === 0) || (last !== closeParen[s[i]])) {
            return false;
        }
    }
        
   if (stack.length === 0) {
       return true 
   } else {
       return false;
   }
};