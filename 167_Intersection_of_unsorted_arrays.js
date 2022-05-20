/*
Given two arrays, find the intersection(items occur in both arrays)
arrays are not sorted, and might have duplicates.
you can modify the arrays
you can return the items in any order, but without duplicates.
This is an easy problem, What is the time & space complexity of your approach?
*/


function getIntersection(arr1, arr2) {
  arr1 = new Set(arr1);
  arr2 = new Set(arr2);
  result = new Set([...arr1].filter(x => arr2.has(x)));
  return [...result].sort( (a, b) => a - b )
}


document.write(getIntersection([1,2,3], [3,2,1]))
// [1,2,3]

document.write(getIntersection([], [3,2,1]))
// []

document.write(getIntersection([1,100, 200, 8,8,8,3,6,100, 10, 10], [8, 7, 7, 50,50, 1,1,1,1,3,3]))
// [1,3,8]

document.write(getIntersection([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,3,3,3,3,3,,2,2,2,], [2]))
// [2]