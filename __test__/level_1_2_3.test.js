/**
 * Created by FF on 3/9/17.
 */
const myfunctions = require('../_main/level_1_2_3');
const checkPalindrome = require('../_main/level_1_2_3')
describe('App', () => {

  test('isLucky', () => {
    let n = 1230
    expect(myfunctions.isLucky(n)).toBeTruthy()

    let m = 239017
    expect(myfunctions.isLucky(m)).toBeFalsy()

  })

  test('testsortByHeight', () => {
    let a = [-1, 150, 190, 170, -1, -1, 160, 180]
    let result = [-1, 150, 160, 170, -1, -1, 180, 190]
    expect(myfunctions.sortByHeight(a)).toEqual(result)

  })

  test('testReverseParentese', () => {

    let s = "a(bc)de";
    let result = "acbde";
    expect(myfunctions.reverseParentheses(s)).toEqual(result)

    let s1 = "a(bcdefghijkl(mno)p)q";
    let result1 = "apmnolkjihgfedcbq";
    expect(myfunctions.reverseParentheses(s1)).toEqual(result1)

    let s2 = "co(de(fight)s)";
    let result2 = "cosfighted";
    expect(myfunctions.reverseParentheses(s2)).toEqual(result2)

    let s3 = "Code(Cha(lle)nge)";
    let result3 = "CodeegnlleahC";
    expect(myfunctions.reverseParentheses(s3)).toEqual(result3)

    let s4 = "Where are the parentheses?";
    let result4 = "Where are the parentheses?";
    expect(myfunctions.reverseParentheses(s4)).toEqual(result4)

    let s5 = "abc(cba)ab(bac)c";
    let result5 = "abcabcabcabc";
    expect(myfunctions.reverseParentheses(s5)).toEqual(result5)

    let s6 = "The ((quick (brown) (fox) jumps over the lazy) dog)";
    let result6 = "The god quick nworb xof jumps over the lazy";
    expect(myfunctions.reverseParentheses(s6)).toEqual(result6)

  })

});