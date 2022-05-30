/*
This could be simply done by a recursion, but it costs so much time that your browser freezes, don't try it with large numbers.

const fib = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  return fib(n - 1) + fib(n - 2)
}

fib(10) // 55
fib(1000) // timeout
*/

const cache = new Map();

function fib(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  if (!cache.has(n)) {
    cache.set(n, fib(n-1) + fib(n-2));
  }

  return cache.get(n);
}



