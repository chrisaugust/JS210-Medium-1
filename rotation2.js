// PROBLEM
// Write a function that rotates the last n digits of a number.
// Rotate by one digit to the left, moving the first digit to
// the end.
//
// EXAMPLES
// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// split number into array of digits
//    (convert to string; split on '', convert each string back to number)
// split array at num.length - n into nonRotating and rotating subarrays
// rotate the rotating subarray using shift (removing 0th element) and push
//   (adding 0th element to end of the array)
// join arrays
// convert joined array to string using join('')
// convert string back to a number
//
//
// CODE

function rotateRightmostDigits(num, n) {
  // split num into an array of digits (as strings)
  let digitsArray = convertNumberToDigitsStringArray(num);

  // split array of digits into two sub-arrays, the first
  // of which will remain static and the second of which will
  // have its digits 'rotated'
  let nonRotating, rotating;
  let indexAtWhichToSlice = digitsArray.length - n;
  nonRotating = digitsArray.slice(0, indexAtWhichToSlice);
  rotating = digitsArray.slice(indexAtWhichToSlice);

  // rotate digits of second subarray and concat to first subarray
  let returnValueAsArray = nonRotating.concat(rotate(rotating));

  // join digits in array and convert from string to Int
  return parseInt(returnValueAsArray.join(''), 10);

}

function convertNumberToDigitsStringArray(number) {
  let numberAsString = number.toString();
  return numberAsString.split('');
}

function rotate(arr) {
  let rotated = arr.slice(1);
  rotated.push(arr[0]);
  return rotated;
}

// TESTS
console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);
