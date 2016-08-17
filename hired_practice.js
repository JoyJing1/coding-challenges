// Equillibrium of an array

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
"use strict"

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    let left = 0;
    let right = A.reduce( (sum, el) => sum + el );

    for(let i = 0; i < A.length; i++) {
        right -= A[i];
        if (left === right) { return i; }
        left += A[i];
    }
    return -1
}


// RUBY VERSION

// # you can write to stdout for debugging purposes, e.g.
// # puts "this is a debug message"
//
// def solution(a)
//   # write your code in Ruby 2.2
//   left = 0
//   right = a.inject(:+)
//
//   a.each_with_index do |el, i|
//     right -= el
//     return i if right == left
//     left += el
//   end
//   -1
// end
