/*
Given an array of integers, all integers appear twice except one integer, could you quickly target it ?
*/

function findSingle(arr) {
  for (let i of arr) {
    if ( arr.indexOf(i) == arr.lastIndexOf(i) ) {
      return i
    }
  }
}


const arr = [10, 2, 2 , 1, 0, 0, 10]
findSingle(arr) // 1