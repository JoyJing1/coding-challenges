// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
"use strict"

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    let left = 0;
    let right = 0;
    let idx = -1;
    
    A.forEach( el => {
        right += el;
        });

    for( let i = 0; i < A.length; i++) {
        right -= A[i];
        if (left === right) {
            console.log("found a balance");
            idx = i;
            console.log(idx);
        }
        left += A[i];
    }
    return idx
}


solution([-1, 3, -4, 5, 1, -6, 2, 1]);
