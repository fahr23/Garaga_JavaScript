/**
 * Created by FF on 3/9/17.
 */


function elemtoReplace(inputArray, elemtoReplace, substiture) {
  return inputArray.map(i => i == elemtoReplace ? substiture : i)
}

function evenDigitsOnly(n) {
  return n.toString().split('').every(e => e % 2 == 0)
}

function variableName(name) {
  var regex = /^[A-Za-z_]+[A-Za-z0-9_]*$/;
  return regex.test(name);
}

function alphabeticShift(inputString) {
  var input = [], output = [];
  for (var i = 0; i < 26; i++) {
    input.push(String.fromCharCode('a'.charCodeAt() + i));
  }
  for (var i = 0; i < inputString.length; i++) {
    output[i] = input[(input.indexOf(inputString[i]) + 1) % input.length];
  }
  return output.join("");
}

module.exports = {
  variableName, elemtoReplace, evenDigitsOnly, alphabeticShift
}
