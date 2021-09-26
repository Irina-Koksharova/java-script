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

// Task 5

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
// ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths,
// so you will not have to decide how to order multiple strings of the same length.

// function sortByLength(array) {
//   let newArray = array.sort(function (a, b) {
//     return a.length - b.length;
//   });
//   return newArray;
// }

// console.log(sortByLength(['Beg', 'Life', 'I', 'To']));

// Task 6

// Implement a method that accepts 3 integer values a, b, c.
// The method should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// }

// const isTriangle = (a, b, c) => {
//   return a + b > c && a + c > b && b + c > a;
// };
// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));

// Task 7

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// function highAndLow(numbers) {
//   let arrayMaxMin = [];
//   const array = numbers.split(' ');
//   let newNumbers = [];
//   for (const arr of array) {
//     const number = Number(arr);
//     newNumbers.push(number);
//   }
//   arrayMaxMin.push(Math.max(...newNumbers), Math.min(...newNumbers));
//   return arrayMaxMin.join(' ');
// }
// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));

// Task 8

// Ben has a very simple idea to make some profit: he buys something and sells it again.
// Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price.
// Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Write a function that returns both the minimum and maximum number of the given list / array.

// function minMax(arr) {
//   let arrayMinMax = [];
//   arrayMinMax.push(Math.min(...arr), Math.max(...arr));
//   return arrayMinMax;
// }

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));

const input =
  'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';

const modifyString = string => {
  const array = string.split(' ');
  let modifyArray = [];
  array.forEach(arr => {
    if (!modifyArray.includes(arr)) {
      modifyArray.push(arr);
    }
  });
  return modifyArray.join(' ');
};
console.log(modifyString(input));
