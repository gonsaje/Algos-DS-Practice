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
  