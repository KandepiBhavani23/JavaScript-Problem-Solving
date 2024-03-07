/*

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.

*/

function isVow(a) {
  let vowels = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] in vowels) {
      result.push(vowels[a[i]]);
    } else {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));
console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
console.log(
  isVow([
    101, 104, 117, 117, 121, 99, 103, 106, 102, 120, 115, 110, 102, 114, 99,
    113, 105, 121,
  ])
);
console.log(
  isVow([
    114, 122, 117, 121, 102, 101, 108, 107, 97, 113, 122, 117, 108, 113, 102,
    116, 114, 119, 113, 122,
  ])
);
