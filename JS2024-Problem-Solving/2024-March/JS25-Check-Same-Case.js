/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

	Examples
	'a' and 'g' returns 1
	'A' and 'C' returns 1
	'b' and 'G' returns 0
	'B' and 'g' returns 0
	'0' and '?' returns -1

*/

function sameCase(a, b) {
  let aUpperCase = a.toUpperCase();
  let bUpperCase = b.toUpperCase();
  let aLowerCase = a.toLowerCase();
  let bLowerCase = b.toLowerCase();

  const specialCharacters = /[^a-zA-Z]/;
  if (specialCharacters.test(a) || specialCharacters.test(b)) {
    return -1;
  }

  return (a === aUpperCase && b === bUpperCase) ||
    (a === aLowerCase && b === bLowerCase)
    ? 1
    : 0;
}
console.log(sameCase("H", "I"));
console.log(sameCase("b", "a"));
console.log(sameCase("d", "d"));
console.log(sameCase("A", "s"));
console.log(sameCase("c", "B"));
console.log(sameCase("b", "Z"));
console.log(sameCase("?", "Z"));
console.log(sameCase("c", "!"));
