// PROBLEM
// Write a recursive function that computes the nth Fibonacci number,
// where the nth is an argument passed to the function.
//
// EXAMPLES
// fibonacci(1);       // 1
// fibonacci(2);       // 1
// fibonacci(3);       // 2
// fibonacci(4);       // 3
// fibonacci(5);       // 5
// fibonacci(12);      // 144
// fibonacci(20);      // 6765
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// check index of last element in fibs array
// if index is less than argument, generate another fib number
//   and push it to the fibs array
// continue the above until the index of last element === n
//
// CODE

function fibonacci(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// TESTS
console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(12) === 144);
console.log(fibonacci(20) === 6765);
