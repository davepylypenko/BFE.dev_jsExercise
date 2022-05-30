/*
Given 2 initial numbers, we can generate a sequence by adding the sum of last two numbers as a new lement.

This is Fibonacci number.

You are asked to create a fib(n) function, which generate the n-th Fibonacci number.
*/

function fib(n) {
  let result = 0;
  let thisN = 1;
  let prev = 0;
  for (let i = 0; i < n - 1; i++){
    result = prev + thisN;
    prev = thisN
    thisN = result
  }
  return n > 1 ? result: n
}


fib(40) 
// 102334155

const nums = [0,1,2,3,4,5,6,7,8,9].map((item) => fib(item))
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]