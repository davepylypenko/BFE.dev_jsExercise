/*
Please implement a function to compare 2 semver strings.
*/

function compare(v1, v2) {
  let arr1 = v1.split('.');
  let arr2 = v2.split('.');
  for (let i = 0; i < arr1.length; i++) {
    if (+arr1[i] > +arr2[i]) {return 1}
    if (+arr1[i] < +arr2[i]) {return -1}
  }
  return 0
}


compare('12.1.0', '12.0.9')
// 1, meaning first one is greater

compare('12.1.0', '12.1.2')
// -1, meaning latter one is greater

compare('5.0.1', '5.0.1')
// 0, meaning they are equal.