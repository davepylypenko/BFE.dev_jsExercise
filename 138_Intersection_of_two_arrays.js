/*
Given 2 sorted array of integers, find the elements that exist in both arrays.
*/


function intersect(arr1, arr2) {
  let result = [];
  for (let i of arr1) {
    if (arr2.includes(i)) {
      result.push(i);
      arr2.shift(i);
    }
  }
  return result
}


intersect( [1,2,2,3,4,4], [2,2,4,5,5,6,2000] )
// [2,2,4]