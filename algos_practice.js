

//given a string screen, find how many ways you can make a + b + c = s but the string concatenations of (a+b), (b+c), and (a+c) are all different
//ex. "xzxzx" => 5

//combos:
// x z xzx
// x zxz x 
// xzx z x
// xz x zx

function concatCombo(s) {

    let counter = 0;
    
    for (let i = 1; i < s.length; i++) {

    }

}
(a + b != b + c && b + c != c + a && a + b != c + a)

//given a matrix that contains any number of 4x4 submatrices, containing the numbers "1"-"16" as strings except for one 


// Given a binary tree root, return the sum of all leaves that are right children.

// For example, given

//    0
//   / \
//  4   2
//     / \
//    1   7
//   / \
//  6   3
// Return 10 since 7 + 3 = 10.

// Example 1
// Input

// root = {val: 9, left: {val: 3, left: {val: 1, left: null, right: null}, right: {val: 2, left: null, right: null}}, right: {val: 8, left: {val: 5, left: null, right: null}, right: null}}
// Output

// 2




// Steady Car
// You are given a list of integers positions representing the position of a car at equally spaced intervals of time. Return the length of the longest sublist where the car was traveling at a constant speed.

// Constraints

// n ≤ 5000 where n is length of positions.
// Example 1
// Input

// positions = [0, 3, 6, 3, 0]
// Output

// 5
// Explanation

// The car is always traveling at 3 units of distance per time

// Example 2
// Input

// positions = [0, 3, 6, 5, 4, 3, 1, 7, 10, 13]
// Output

// 4
// Explanation

// The longest period the car was traveling at a constant speed was in the sublist 



class Solution {
    solve(positions) {
        // Write your code here
        let maxlength = 0
        let length = 2
        let unit = Math.abs(positions[0] - positions[1]);
        for (let i = 1; i < positions.length - 1; i++) {
            
            if (Math.abs(positions[i] - positions[i + 1]) === unit){
                length += 1
                unit = Math.abs(positions[i] - positions[i + 1]);
               
            } else {
                length = 2;
                unit = Math.abs(positions[i] - positions[i + 1]);
            }
            
            if (maxlength < length) {
                maxlength = length;
            }
        }
        return maxlength;
    }
}

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

function isValidIP(str) {
    let codes = str.split(".");
    let count = 0;
    if (codes.length !== 4) return false;
    codes.forEach(code => {
      let num = parseInt(code);
      if (num >= 0 && num <= 255) {
        count += 1
      }
    })
    
    if (count === 4) return true;
    
    return false;
  }

  Test.describe("Sample tests", () => {

    Test.assertEquals(isValidIP("0.0.0.0"), true);
    Test.assertEquals(isValidIP("12.255.56.1"), true);
    Test.assertEquals(isValidIP("137.255.156.100"), true);
    Test.assertEquals(isValidIP(''), false);
    Test.assertEquals(isValidIP('abc.def.ghi.jkl'), false);
    Test.assertEquals(isValidIP('123.456.789.0'), false);
    Test.assertEquals(isValidIP('12.34.56'), false);
    Test.assertEquals(isValidIP('01.02.03.04'), false);
    Test.assertEquals(isValidIP('256.1.2.3'), false);
    Test.assertEquals(isValidIP('1.2.3.4.5'), false);
    Test.assertEquals(isValidIP('123,45,67,89'), false);
    Test.assertEquals(isValidIP('1e0.1e1.1e2.2e2'), false);
    Test.assertEquals(isValidIP(' 1.2.3.4'), false);
    Test.assertEquals(isValidIP('1.2.3.4 '), false);
    Test.assertEquals(isValidIP('12.34.56.-7'), false);
    Test.assertEquals(isValidIP('1.2.3.4\n'), false);
    Test.assertEquals(isValidIP('\n1.2.3.4'), false);
  });


//   Compress String
//   Given a string s, eliminate consecutive duplicate characters from the string and return it.
  
//   That is, if a list contains repeated characters, they should be replaced with a single copy of the character. The order of the elements should not be changed.
  
//   Constraints
  
//   n ≤ 100,000 where n is the length of s
//   Example 1
//   Input
  
//   s = "aaaaaabbbccccaaaaddf"
//   Output
  
//   "abcadf"
//   Example 2
//   Input
  
//   s = "a"
//   Output
  
//   "a"

  class Solution {
    solve(s) {
        if (s.length <= 1) {
            return s;
        }
        
        let arr = [];
        for (let i=0; i<s.length;i++) {
            if (arr[arr.length - 1] !== s[i]) {
                arr.push(s[i])
            }
        }
        
        return arr.join("")
    }
}

// Rotate List Left by K
// Question 42 of 769
// Write a function that rotates a list of numbers to the left by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by 2 becomes [3, 4, 5, 6, 1, 2]. Numbers should wrap around.

// Note: The list is guaranteed to have at least one element, and k is guaranteed to be less than or equal to the length of the list.

// Bonus: Do this without creating a copy of the list. How many swap or move operations do you need?

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input

// nums = [1, 2, 3, 4, 5, 6]
// k = 2
// Output

// [3, 4, 5, 6, 1, 2]
// Example 2
// Input

// nums = [1, 2, 3, 4, 5, 6]
// k = 6
// Output

// [1, 2, 3, 4, 5, 6]
// Example 3
// Input

// nums = [1]
// k = 0
// Output

// [1]

class Solution {
    solve(nums, k) {
        let arr = [];

        while(arr.length < k) {
            arr.push(nums.shift());
    
        }
        return nums.concat(arr)
    }
}

// Counting Dinosaurs
// Question 204 of 806
// You are given a string animals and another string dinosaurs. Every letter in animals represents a different type of animal and every unique character in dinosaurs represents a different dinosaur.

// Return the total number of dinosaurs in animals.

// Example 1
// Input

// animals = "abacabC"
// dinosaurs = "bC"
// Output

// 3
// Explanation

// There's two types of dinosaurs "b" and "C". There's 2 "b" dinosaurs and 1 "C" dinosaur. Note we didn't count the lowercase "c" animal as a dinosaur.

class Solution {
    solve(animals, dinosaurs) {
        let anims = animals.split("");
        let count = 0;
        for (let i = 0; i < anims.length; i++) {
            if (dinosaurs.includes(anims[i])) count += 1;
        }
        
        return count;
    }
}

// Given a string of words delimited by spaces, reverse the order of words. For example, given "hello there my friend", return "friend my there hello".

// Example 1
// Input

// sentence = "hello there my friend"
// Output

// "friend my there hello"

class Solution {
    solve(sentence) {
        let words = sentence.split(" ");
        let reverse = [];
        
        for (let i = words.length - 1; i >= 0; i--) {
            reverse.push(words[i]);
        }
        
        return reverse.join(' ');
    }
}

// Given a non-negative integer num, return whether it is a palindrome.

// Bonus: Can you solve it without using strings?

// Example 1
// Input

// num = 121
// Output

// true
// Example 2
// Input

// num = 20200202
// Output

// true
// Example 3
// Input

// num = 44
// Output

// true

class Solution {
    solve(num) {
        let str = num.toString();
        let revStr = "";
        
        for (let i = str.length - 1; i >= 0; i--) {
            revStr += str[i]
        }
        return revStr === str;
    }
}