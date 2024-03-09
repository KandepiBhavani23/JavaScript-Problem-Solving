/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

*/
function countSheeps(sheep) {
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count++;
    }
  }
  return count;
}

console.log(countSheeps([undefined]));
console.log(countSheeps([]));
console.log(countSheeps([undefined]));
console.log(countSheeps([null]));
console.log(countSheeps([false]));
console.log(countSheeps([true]));
console.log(countSheeps([undefined, null, false, true]));
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
);
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
