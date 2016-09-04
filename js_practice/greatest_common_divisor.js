// Find the greatest common divisor between two numbers

function greatedCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  } else {
    return greatedCommonDivisor(b, a%b);
  }
}

console.log(greatedCommonDivisor(14, 21));
console.log(greatedCommonDivisor(25, 15));

// Euclidean Algorithm
// 14, 21
// --> 21, 14
// --> 14, 7
// --> 7, 0
// --> 7
//
// 15, 25
// --> 25, 15
// --> 15, 10
// --> 10, 5
// --> 5, 0
// --> 5
