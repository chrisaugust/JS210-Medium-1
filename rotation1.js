// PROBLEM
// Write a function that rotates an array by moving the first element
// to the end of the array, without modifying the original array.
//
// If input is not an array, return undefined.
//
// If input is an empty array, return an empty array.
//
// EXAMPLES
// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []
//
// // return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined
//
//
// // the input array is not mutated
// const array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// initialize new array to a slice of input array
// from indices 1 to inputArray.length - 1
//
// push first element of input array to returnArray
//
// return returnArray
//
// CODE

function rotateArray(inputArray) {
  if (!Array.isArray(inputArray)) return undefined;
  if (inputArray.length === 0) return [];
  let returnArray = inputArray.slice(1);
  returnArray.push(inputArray[0]);
  return returnArray;
}

// TESTS
console.log(rotateArray([7, 3, 5, 2, 9, 1]).toString() ===
  [3, 5, 2, 9, 1, 7].toString());
console.log(rotateArray(['a', 'b', 'c']).toString() ===
  ["b", "c", "a"].toString());
console.log(rotateArray(['a']).toString() === ["a"].toString());
console.log(rotateArray([1, 'a', 3, 'c']).toString() ===
  ["a", 3, "c", 1].toString());
console.log(rotateArray([{ a: 2 }, [1, 2], 3]).toString() ===
  [[1, 2], 3, { a: 2 }].toString());
console.log(rotateArray([]).toString() === [].toString());

// return `undefined` if the argument is not an array
console.log(rotateArray() === undefined);
console.log(rotateArray(1) === undefined);


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array).toString() === [2, 3, 4, 1].toString());
console.log(array.toString() === [1, 2, 3, 4].toString());

