/**
 * Created by FF on 3/9/17.
 */
const myfunctions = require('../_main/level_4');
describe('App', () => {

  test('alternatingSums', () => {
    let a = [50, 60, 60, 45, 70]
    let result = [180, 105]
    expect(myfunctions.alternatingSums(a)).toEqual(result)

  })

  test('addborder', () => {
    let inputArray = ["abc", "ded"]
    let result = ["*****", "*abc*", "*ded*", "*****"]
    expect(myfunctions.addBorder(inputArray)).toEqual(result)
  })

  test('arrayChange', () => {
    let inputArray = [1, 1, 1]
    let result = 3
    expect(myfunctions.arrayChange(inputArray)).toEqual(result)
  })

  test('palindrome', () => {
    let input = "aabb"
    expect(myfunctions.palindromeRearranging(input)).toBeTruthy()
  })

});