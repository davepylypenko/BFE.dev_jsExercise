/*
Roman numerals are represented by combinations of following seven symbols, each with a fixed integer value.

For Standard form, subtractive notation is used, meaning 4 is IV rather than IIII, 9 is IX rather than VIIII. Same rule applies to 40(XL) and 900(CM) .etc.

Simply speaking, the roman numerals in standard form follow these rules.

symbols are listed from highest to lowest, from left to right
from left to right, if the next symbol value is bigger than current one, it means subtracting, otherwise adding.
Please implement romanToInteger(). The input are all valid strings.
*/


function romanToInteger(str) {
  let allRoman = {'M':1000, 'D':500, 'C':100, 'L':50, 'X':10, 'V': 5, 'I':1};
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (allRoman[str[i]] < allRoman[str[i + 1]]) {
      result -= allRoman[str[i]];
    } else {
      result += allRoman[str[i]];
    }
  }
  return result
}


romanToInteger('CXXIII')
// 123

romanToInteger('MCMXCIX')
// 1999

romanToInteger('MMMCDXX')
// 3420