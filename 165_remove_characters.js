/*
Given a string contaning only a, b and c, remove all b and ac.
*/


function removeChars(str) {
  while (str.includes('b')) {
    str = str.replace(/b/, '');
  }
  while (str.includes('ac')) {
    str = str.replace(/ac/, '');
  }
  return str
}


removeChars('ab') 
// 'a'

removeChars('abc') 
// ''

removeChars('cabbaabcca') 
// 'caa'