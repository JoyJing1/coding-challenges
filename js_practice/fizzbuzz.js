// Classic FizzBuzz

function fizzbuzz(int) {
  let response = "";
  if (int % 3 === 0) { response += "Fizz"; }
  if (int % 5 === 0) { response += "Buzz"; }
  console.log(response.length === 0 ? int : response);
}

fizzbuzz(0);
fizzbuzz(1);
fizzbuzz(2);
fizzbuzz(3);
fizzbuzz(4);
fizzbuzz(5);
fizzbuzz(15);
fizzbuzz(30);
fizzbuzz(33);
fizzbuzz(55);
