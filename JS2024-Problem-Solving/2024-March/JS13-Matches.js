/*
Finish the uefaEuro2016() function so it return string just like in the examples below:
*/

function uefaEuro2016(teams, scores) {
  let result = "";
  for (let i = 0; i < teams.length; i++) {
    if (scores[i] > scores[i + 1]) {
      result = `At match ${teams[i]} - ${teams[i + 1]}, ${teams[i]} won!`;
    } else if (scores[i] < scores[i + 1]) {
      result = `At match ${teams[i]} - ${teams[i + 1]}, ${teams[i + 1]} won!`;
    } else if (scores[i] === scores[i + 1]) {
      result = `At match ${teams[i]} - ${teams[i + 1]}, teams played draw.`;
    }
  }
  return result;
}

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0]));
console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2]));
console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1]));
