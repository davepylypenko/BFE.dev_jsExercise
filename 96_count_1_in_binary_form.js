/*
Given an integer, count "1" in its binary form.
*/

function countOne(num) {
  num = num.toString(2);
  num = num.split('1');
  return num.length - 1
}

countOne(1) 
// 1,  "1"

countOne(257799) 
// 12, "111110111100000111"