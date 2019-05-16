/**
 * Created by FF on 3/9/17.
 */



function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  return Math.max(yourLeft, yourRight) == Math.max(friendsLeft, friendsRight)
      && Math.min(yourLeft, yourRight) == Math.min(friendsLeft, friendsRight);
}

function arrayMaximalAdjacentDifference(inputArray) {
  var result = 0;

  for (var i = 0; i < inputArray.length - 1; i++) {
    var r = Math.abs(inputArray[i + 1] - inputArray[i]);
    if (r > result) {
      result = r;
    }
  }

  return result;
}

function isIPv4Address(inputString) {
  let arr = inputString.split('.').map(e => e && e <= 255);
  let res = arr.reduce((a, e) => a && e, true);
  return arr.length === 4 && res;
}

module.exports = {
  areEquallyStrong, arrayMaximalAdjacentDifference, isIPv4Address
}
