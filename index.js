// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


function fibonacciIterative(n) {
  let prevValues = [0, 1];

  if (n < prevValues.length) {
    return n;
  }

  for (let i = prevValues.length; i <= n; i++) {
    prevValues = [
      prevValues[1],
      prevValues[0] + prevValues[1]
    ]
  }

  return prevValues[1];
}

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
