// Given a string of numbers and operators,
// print out all the different ways you can
// add parentheses to force the order of operations
// to be explicit, and the result for running
// the operations in that order.
//
// Should take ~ 90 min, limit is 4 hours
//
// Assume:
// No weird inputs, everything is separated by one space
// Supported operators are +, *, -, =
//    (for the = operator, if the values are the same
//    return 1, otherwise return 0)

// Print your results sorted numerically
// Don't worry about the input expression size being too large
// Yur code should be written in Javascript
// Don't use eval or external libraries

function orderOps() {
  console.log(args);
}





// node test.js "2 - 1 - 1"
// ((2-1)-1) = 0
// (2-(1-1)) = 2
//
// node test.js "2 * 3 - 4 * 5"
// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10
//
// node test.js "2 + 2 = 2"
// ((2+2)=2) = 0
// (2+(2=2)) = 3
