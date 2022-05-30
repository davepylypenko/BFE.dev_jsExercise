/*
Given a string, compress the repeating letters with count number
*/

function compress(str) {
  let count = 1;
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++
    } else {
      result += count == 1 ? `${str[i]}` : `${str[i]}${count}`
      count = 1
    }
  }
  return result
}

compress('a') // 'a'
compress('aa') // 'a2'
compress('aaa') // 'a3'
compress('aaab') // 'a3b'
compress('aaabb') // 'a3b2'
compress('aaabba') // 'a3b2a'