/*
	
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

*/

function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 2) return 0;
  const maxElement = Math.max(...array);
  const minElement = Math.min(...array);
  const sum = array.reduce((a, b) => a + b, 0);
  return sum - maxElement - minElement;
}

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([1, 1, 11, 2, 3]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
console.log(sumArray(null));
console.log(sumArray([]));
