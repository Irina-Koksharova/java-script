// Task 1

// There is an array with some numbers. All numbers are equal except for one.Try to find it!

// function findUniq(arr) {
//   for (const element of arr) {
//     if (arr.indexOf(element) === arr.lastIndexOf(element)) {
//       return element;
//     }
//   }
// }
// console.log(findUniq([1, 1, 1, 2, 1, 1]));

// Task 2

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// function findShort(s) {
//   const array = s.split(' ');
//   let smallestLenght = array[0].length;
//   for (const element of array) {
//     if (element.length < smallestLenght) {
//       smallestLenght = element.length;
//     }
//   }
//   return smallestLenght;
// }
// console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// Task 3

// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8(3 + 5)
// findSum(10) should return 33(3 + 5 + 6 + 9 + 10)

// function findSum(n) {
//   let total = 0;
//   const array = new Array(n);
//   for (let i = 0; i < n; i += 1) {
//     array[i] = i + 1;
//     if (array[i] % 3 === 0 || array[i] % 5 === 0) {
//       total += array[i];
//     }
//   }
//   return total;
// }
// console.log(findSum(10));

// Task 4

// As a part of this Kata, you need to create a function that when provided with a triplet,
// returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers(Haskell: a tuple).
// For example: gimme([2, 3, 1]) => 0

// const gimme = function (inputArray) {
//   let middleNumber;
//   for (const element of inputArray) {
//     if (
//       element !== Math.min(...inputArray) &&
//       element !== Math.max(...inputArray)
//     ) {
//       return (middleNumber = inputArray.indexOf(element));
//     }
//   }
//  };
// console.log(gimme([2, 3, 1]));
// console.log(gimme([5, 10, 14]));
