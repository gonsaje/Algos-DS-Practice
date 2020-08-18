// Given an array of integers, and none of the integers in the array are longer than the length of the array, find the first dupe

//  [2,1,3,5,3,2] => 3

function firstDupe(arr) {
    for (let i = 0; i < arr.length; i++) {        
        if (arr[Math.abs(arr[i]) - 1] < 0) {            
            return Math.abs(arr[i]);        
        } else {            
            arr[Math.abs(arr[i]) -1] = -arr[Math.abs(arr[i]) -1]        
        }    
    }   

    return -1;
}

console.log(firstDupe([2,1,3,5,3,2]))