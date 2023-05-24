// PROBLEM - Actualize 'Maximum Rotation'!
//
// Take 735291 and rotati by one digit to left, yielding 352917.
// Then fix the first digit and rotate the remaining digits: 329175.
// Keep the first two digits fixed and rotate again: 321759.
// Continue in this manner until the final two digits are rotated to
// produce the maximally rotated result: 321579.
//
// Write a function that takes an integer as argument and returns the
// maximum rotation of that integer. You can and should use the
// rotateRightmostDigits function from the previous exercise.
//
// EXAMPLES
// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// intialize rotatingInteger to integerArg
// loop (integerArg's number of digits) times with
// numberOfDigitsToRotate as the looping variable: intially assigned
// to the total number of digits, it will decrement with each
// iteration of the loop
//   call rotateRightmostDigits with arguments rotatingInteger and
//   numberOfDigitsToRotate
//
//   reassign result to rotatingInteger
//
// return final value of rotatingInteger
//
// CODE

function maxRotation(integerArg) {
  let numDigits = convertIntegerToDigitsStringArray(integerArg).length;
  let startingInteger = integerArg;
  let rotatedInteger;

  if (numDigits === 1) return integerArg;

  for (let numberOfDigitsToRotate = numDigits; numberOfDigitsToRotate > 1;
    numberOfDigitsToRotate -= 1) {
    rotatedInteger =
      rotateRightmostDigits(startingInteger, numberOfDigitsToRotate);
    startingInteger = rotatedInteger;
  }

  return rotatedInteger;

}

function rotateRightmostDigits(number, numDigits) {
  // split num into an array of digits (as strings)
  let digitsArray = convertIntegerToDigitsStringArray(number);

  // split array of digits into two sub-arrays, the first
  // of which will remain static and the second of which will
  // have its digits 'rotated'
  let nonRotating, rotating;
  let indexAtWhichToSlice = digitsArray.length - numDigits;
  nonRotating = digitsArray.slice(0, indexAtWhichToSlice);
  rotating = digitsArray.slice(indexAtWhichToSlice);

  // rotate digits of second subarray and concat to first subarray
  let returnValueAsArray = nonRotating.concat(rotate(rotating));

  // join digits in array and convert from string to Int
  return parseInt(returnValueAsArray.join(''), 10);

}

function convertIntegerToDigitsStringArray(number) {
  let numberAsString = number.toString();
  return numberAsString.split('');
}

function rotate(arr) {
  let rotated = arr.slice(1);
  rotated.push(arr[0]);
  return rotated;
}

// TESTS
console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15); //the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);
