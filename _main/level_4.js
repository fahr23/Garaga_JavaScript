/**
 * Created by FF on 3/9/17.
 */

function alternatingSums(a) {
  return a.reduce((a, x, i) => (a[i % 2] += x) && a, [0, 0])
}

function addBorder(picture) {
  var result = [];
  var firstLast = '*'.repeat(picture[0].length + 2);
  result.push(firstLast);
  picture.map(val => result.push('*' + val + '*'));
  result.push(firstLast);
  return result;
}

function arrayChange(inputArray) {
  var na = inputArray.slice(), moves = 0
  for (let i = 1; i <= inputArray.length; i++) {
    while (na[i] <= na[i - 1]) {
      na[i]++
      moves++
    }
  }
  return moves
}

function palindromeRearranging(inputString) {
  var count = [];
  for (var i = 0; i < 26; i++) {
    count.push(0);
  }
  for (var i = 0; i < inputString.length; i++) {
    count[inputString.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  var odds = 0;
  for (var i = 0; i < 26; i++) {
    if (count[i] % 2 === 1) {
      odds++;
    }
  }
  return odds === inputString.length % 2;
}

module.exports = {
  alternatingSums, addBorder, arrayChange, palindromeRearranging
}
