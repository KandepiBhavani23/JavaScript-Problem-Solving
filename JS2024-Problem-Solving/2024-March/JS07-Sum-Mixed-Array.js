/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/

function sumMix(x) {
  return x.map((x) => Number(x)).reduce((a, b) => a + b, 0);
}

console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix([9, 3, "7", "3"]));
