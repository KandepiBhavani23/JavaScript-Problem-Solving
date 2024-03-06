/*

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

*/

function array(string) {
  const splitString = string.split(",");
  return splitString.length <= 2
    ? null
    : splitString.slice(1, splitString.length - 1).join(" ");
}

console.log(array(""));
console.log(array("1"));
console.log(array("A1,B2"));
console.log(array("1,2,3"));
console.log(array("1,2,3,4"));
console.log(array("A1,B2,C3,D4,E5"));
console.log(array("A,1,23,456,78,9,Z"));
