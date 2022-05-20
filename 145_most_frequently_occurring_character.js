/*
Given a non-empty string, return the most frequently ocurring character.
If there are multiple characters with same occurrance, return an array of them.
*/

function count(str) {
  let result = '';
  let maxCount = 0;
  let items = new Set(str.split(''));
  for (let i of items) {
    let count_i = str.split(i).length;
    if (count_i > maxCount) {
      result = i;
      maxCount = count_i
      }
    else if (count_i == maxCount) {
      result += i;
      }
  }
  if (result.length > 1) {return result.split('')}
  else {return result}
}


count('abbccc')
// 'c'

count('abbcccddd')
// ['c', 'd']