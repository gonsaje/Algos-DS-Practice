

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