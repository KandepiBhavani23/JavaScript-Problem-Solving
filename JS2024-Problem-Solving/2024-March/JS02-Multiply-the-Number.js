/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
*/

function multiply(number) {
  let digitCount = 0;
  let originalNumber = number;

  number = Math.abs(number);
  while (number > 0) {
    number = Math.floor(number / 10);
    digitCount++;
  }

  let power = Math.pow(5, digitCount);
  return power * originalNumber;
}

console.log(multiply(10));
console.log(multiply(341));
console.log(multiply(100));
console.log(multiply(-98));
