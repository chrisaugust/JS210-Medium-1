// PROBLEM
// Write a function that takes a sentence string as an argument
// and returns that string with every occurrence of a 'number word'
// (eg. 'zero', 'one', 'two', 'three', etc.) converted to its
// corresponding digit character.
//
// EXAMPLES
// wordToDigit('Please call me at five five five one two three four. Thanks.');
//  // "Please call me at 5 5 5 1 2 3 4. Thanks."
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// version 1
// initialize an object with 'number words' as properties and
//   corresponding digit characters as the values
// split string argument into sentences, then words
// iterate over the words, checking if each word is a number word;
//   if it is, substitute for digit using the hash
// join words back into a string and return
//
// version 2
// iterate over the properties of the numberWordsObj, and use each
// property as the regex argument for replace(), with the property's
// value as the second argument for replace()
//
// CODE
const numberWordsObj = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

// version 2
function wordToDigit(strMessage) {
  for (const numberWord in numberWordsObj) {
    let regex = new RegExp(`${numberWord}`, "g");
    strMessage = strMessage.replace(regex, numberWordsObj[numberWord]);
  }
  return strMessage;
}

// function wordToDigit(strMessage) {
//   let sentences = splitIntoWords(strMessage);
//
//   replaceNumberWordsWithDigits(sentences);
//
//   return joinWordsArrayIntoSingleString(sentences);
// }
//
// function splitIntoWords(sentences) {
//   return sentences.split('.').map(sentence => sentence.split(' '));
// }
//
// function joinWordsArrayIntoSingleString(words) {
//   return words.map(sentence => sentence.join(' ')).join('.');
// }
//
// function replaceNumberWordsWithDigits(words) {
//   words.forEach(sentence => {
//     sentence.forEach((word, idx) => {
//
//       if (numberWordsObj.hasOwnProperty(word)) {
//         sentence[idx] = numberWordsObj[word];
//       }
//     });
//   });
// }

// TESTS
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') ===
"Please call me at 5 5 5 1 2 3 4. Thanks.");
