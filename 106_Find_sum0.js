/*
Given an array of integers, find two number that sums up to 0, return their indices. There might be multiple pairs, any of them would do. If not found, return null
*/


function findTwo(arr) {
  let result = null;
  for (let i of arr) {
    if (-i in arr) {
      result = []
      result.push(arr.indexOf(i))
      result.push(arr.indexOf(-i))
      return result
    }
  }
  return result
}

findTwo([1,2,3,-1])
// [0,3]

findTwo([1,2,3,-1,-2,0])
// [0,3] or [1,4] or [5, 5]

findTwo([1,2,3,4])
// null

