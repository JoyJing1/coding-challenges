// Write a function that takes an integer and returns it in binary form.

function binary(num) {
  let binaryForm = "";
  if (num < 0) { binaryForm = "-"; num = - num; }

  for (let i = 8; i >= 0; i--) {
    binaryForm += Math.floor(num / Math.pow(2, i)) % 2;
  }
  return binaryForm;
}

console.log(binary(-3));
console.log(binary(0));
console.log(binary(1));
console.log(binary(2));
console.log(binary(3));
console.log(binary(4));
console.log(binary(5));
console.log(binary(6));
console.log(binary(43212));
console.log(binary(432124903));
