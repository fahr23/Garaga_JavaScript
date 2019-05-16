/**
 * Created by FF on 3/9/17.
 */
const myfunctions = require('../_main/level_5');
const checkPalindrome = require('../_main/level_4')
describe('App', () => {

  test('arraymaximalAdjacentDiff', () => {
    let a = [2, 4, 1, 0]
    let result = 3;
    expect(myfunctions.arrayMaximalAdjacentDifference(a)).toEqual(result)
  })

  test('isIPv4Address', () => {
    let input = ".254.255.0"
    expect(myfunctions.isIPv4Address(input)).toBeFalsy()
  })


});