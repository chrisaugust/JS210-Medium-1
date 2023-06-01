// PROBLEM
// Re-write the recursive function that computes the nth fibonacci number
// using memoization to avoid duplicating calculations.
//
// EXAMPLES
// fibonacci(20);       // 6765
// fibonacci(50);       // 12586269025
// fibonacci(75);       // 2111485077978050
//
// DATA STRUCTURES
// Object to use as lookup table
//
// ALGORITHM
//
// CODE
const fibNumbers = {
  0: 0,
  1: 1,
};

function fibonacci(nthFibonacci) {
  if (fibNumbers.hasOwnProperty(String(nthFibonacci))) {
    return fibNumbers[nthFibonacci];
  }
  fibNumbers[nthFibonacci] = fibonacci(nthFibonacci - 1) +
                             fibonacci(nthFibonacci - 2);
  return fibNumbers[nthFibonacci];

}

// TESTS
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);
