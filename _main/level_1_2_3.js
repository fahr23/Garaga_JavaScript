/**
 * Created by FF on 3/9/17.
 */

function centuryFromYear(year) {
  var kalan = year % 100;
  if (kalan != 0) {
    return (year - kalan) / 100 + 1
  }

  return (year - kalan) / 100
}

function checkPalindrome(inputString) {
  if (inputString.length == 1)
    return true
  for (var i = 0; i < inputString.length; i++) {
    if (inputString.charAt(i) != inputString.charAt(inputString.length - i - 1))
      return false
  }
  return true
}

function adjacentElemensProduct(items) {
  let max = items[0] * items[1]
  for (let m = 0; m < items.length; m++) {
    if (items[m] * items[m + 1] > max)
      max = items[m] * items[m + 1]
  }
  return max
}

function shapeArea(n) {
  var maxHeight = 2 * n - 1
  var shapeArea = 0;

  for (let m = 0; m < n; m++) {
    shapeArea += 2 * m + 1
  }

  return 2 * shapeArea - maxHeight
}

function makeArrayConsecutive2(items) {

  var max = Math.max.apply(null, items)
  var min = Math.min.apply(null, items)
  var result = 0;
  for (var m = min; m < max; m++) {
    if (items.indexOf(m) == -1) {
      result++
    }
  }
  return result;
}

function almostsequence(sequence) {
  var faults = 0,
      index = 0;

  function checkSort(a, b) {
    var prevElement = sequence[index - 2];
    var prevPrevElement = sequence[index - 3];
    index++;
    if (index == 1) return b;
    if (faults == 1) {
      if ((prevElement >= a && prevElement >= b && (prevPrevElement >= a || prevPrevElement >= b))) {
        faults++;
      }
    }
    if (a >= b) faults++;

    return b;
  }

  sequence.reduce(checkSort, 0);
  return faults <= 1;
}

function matrixElementsSum(matrix) {

  for (var r = 0, j = 0; j < matrix[0].length; j++) {
    for (var i = 0; i < matrix.length; i++) {

      if (matrix[i][j] === 0) break
      else r += matrix[i][j]
    }
  }
  return r
}

function allLongestString(inputArray) {

  let maxLength = Math.max(...inputArray.map(str => str.length))
  let ss = inputArray.filter(x => x.length === maxLength)
  return ss;
}

function commonCharacterCount(s1, s2) {
  var cnt = 0
  for (var i = 0; i < s1.length; i++) {
    if (s2.indexOf(s1[i]) != -1) {
      s2 = s2.replace(s1[i], '')
      cnt++
    }
  }
  return cnt++
}

function isLucky(n) {
  var len = n.toString().length;
  var str1 = n.toString().slice(0, len / 2);
  var str2 = n.toString().slice(len / 2);
  str1 = str1.split('').reduce((acc, val) => acc + Number(val), 0);
  str2 = str2.split('').reduce((acc, val) => acc + Number(val), 0);
  return str1 === str2

}

function sortByHeight(a) {
  "use strict";
  let people = a.filter(x => x != -1).sort((a, b) => a - b);
  return a.map(x => (x === -1) ? -1 : people.shift());
}

function reverseParentheses(s) {
  while (/\(.*\)/.test(s)) {
    s = s.replace(/\(([^()]*?)\)/g, (_, x) => x.split("").reverse().join(""))
  }
  return s

}

module.exports = {
  reverseParentheses,
  sortByHeight,
  isLucky,
  commonCharacterCount,
  allLongestString,
  almostsequence,
  matrixElementsSum,
  checkPalindrome,
  centuryFromYear,
  adjacentElemensProduct,
  shapeArea,
  makeArrayConsecutive2
}
