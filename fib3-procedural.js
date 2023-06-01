// PROBLEM
// Write a procedural function that computes the nth fibonacci number,
// where n is provided as argument to the function.
//
// EXAMPLES
// fibonacci(20);       // 6765
// fibonacci(50);       // 12586269025
// fibonacci(75);       // 2111485077978050
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// fib1 = 1
// fib2 = 1
// push fib1 and fib2 to an array
//
// until the size of the fibs array matches the argument,
// continue adding the last two elements of the array and pushing the
// sum to the array as the next fibonacci number
//
// CODE

function fibonacci(nthFibonacci) {
  let fibs = [1, 1];

  do {
    fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
  } while (fibs.length < nthFibonacci);

  console.log(fibs);
  return fibs[fibs.length - 1];
}

// TESTS
console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
console.log(fibonacci(75) === 2111485077978050);
