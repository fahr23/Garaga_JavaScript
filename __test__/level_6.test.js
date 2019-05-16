/**
 * Created by FF on 3/9/17.
 */
const myfunctions = require('../_main/level_6');
describe('App', () => {
  test('arrayReplace', () => {
    let inputArray = [1, 2, 1]
    let elemtoreplace = 1
    let substitue = 3;
    let result = [3, 2, 3]
    expect(myfunctions.elemtoReplace(inputArray, elemtoreplace, substitue)).toEqual(result)
  })

  test('evenDigits', () => {
    expect(myfunctions.evenDigitsOnly(121212)).toBeFalsy()
  })

  test('variableName', () => {
    expect(myfunctions.variableName('var_1__Int')).toBeTruthy()
  })

  test('alphabeticShit', () => {
    expect(myfunctions.alphabeticShift('crazy')).toEqual('dsbaz')
  })

});