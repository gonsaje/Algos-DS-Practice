// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place? 

function rotateMatrix(matrix) {
  
    return matrix
}
  
  let mat1 = [["a","a"],["b","b"]];
  console.log(rotateMatrix(mat1));
  // [                     [
  //  [a, a, a, a],          [d, c, b, a],
  //  [b, b, b, b],  ==>     [d, c, b, a],
  //  [c, c, c, c],          [d, c, b, a],
  //  [d, d, d, d]           [d, c, b, a]
  // ]                     ]
  
  // [[a,a],     [[b,a],
  //  [b,b]]  =>  [b,a]] 
  

  //solution 

//   Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
//   column are set to O. 

const zero = (matrix) => {
    let zeroRow = new Array(matrix[0].length);
    zeroRow.fill(0);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            //     if ()
            }
        
    }
    return matrix
};

const columned = matrix => {

}

const mat2 = [[1,0,2], [1,2,3]]
const mat3 = [[1,3,4,5],[2,"a",0,4],["b", "c", "z",1]]
console.log(zero(mat2))
console.log(zero(mat3))


// alejandro's solution

const zero2 = matrix => {

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
          if (matrix[r][c] === 0) {
            // fill row
            newMatrix[r].fill(0)
            // fill col
            for (let i = 0; i < n; i++) {
              newMatrix[i][c] = 0;
            }
    
          }
        }
      }
}


