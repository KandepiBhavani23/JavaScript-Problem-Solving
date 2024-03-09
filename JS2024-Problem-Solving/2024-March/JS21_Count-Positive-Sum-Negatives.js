/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

*/

function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length <= 2) return [];

  let positives = 0;
  let negatives = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) positives++;
    else negatives += input[i];
  }

  return [positives, negatives];
}
console.log(countPositivesSumNegatives([undefined]));

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
