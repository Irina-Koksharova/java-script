// Task 1

// function numberToString(num) {
//   return String(num);
// }

// console.log(numberToString(123)); // returns '123';`
// console.log(numberToString(999)); // returns '999';`

// Task 2

// After a hard quarter in the office you decide to get some rest on a vacation.
// So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation.
// The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40.If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// function rentalCarCost(d) {
//   let totalCost;
//   const pricePerDay = 40;
//   const firstDiscount = 20;
//   const secondDiscount = 50;

//   if (d < 3) {
//     totalCost = d * pricePerDay;
//   } else if (d >= 3 && d < 7) {
//     totalCost = d * pricePerDay - firstDiscount;
//   } else {
//     totalCost = d * pricePerDay - secondDiscount;
//   }
//   return totalCost;
// }

// function rentalCarCost(d) {
//   const pricePerDay = 40;
//   const firstDiscount = 20;
//   const secondDiscount = 50;
//   let totalCost = d * pricePerDay;

//   if (d < 3) {
//     totalCost;
//   } else if (d >= 3 && d < 7) {
//     totalCost -= firstDiscount;
//   } else {
//     totalCost -= secondDiscount;
//   }
//   return totalCost;
// }

// const rentalCarCost = d => {
//   const pricePerDay = 40;
//   const firstDiscount = 20;
//   const secondDiscount = 50;
//   let totalCost = d * pricePerDay;

//   if (d >= 3 && d < 7) {
//     totalCost -= firstDiscount;
//   } else if (d >= 7) {
//     totalCost -= secondDiscount;
//   } else {
//     totalCost;
//   }
//   return totalCost;
// };

// console.log(rentalCarCost(2));
// console.log(rentalCarCost(3));
// console.log(rentalCarCost(5));
// console.log(rentalCarCost(7));
// console.log(rentalCarCost(9));

// Task 3

// You get an array of numbers, return the sum of all of the positives ones.
// Example[1, -4, 7, 12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let total = 0;
//   for (const element of arr) {
//     element > 0 ? (total += element) : total;
//   }
//   return total;
// }
// console.log(positiveSum([1, -4, 7, 12]));

// Task 4

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// Return the resulting string.

// function fakeBin(x) {
//   const array = [];
//   let newString;
//   for (let element of x) {
//     element < 5 ? (element = 0) : (element = 1);
//     array.push(element);
//     newString = array.join('');
//   }
//   return newString;
// }
// console.log(fakeBin('45385593107843568')); // '01011110001100111'

// Task 5

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals,
// saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say for a flower of
// a given number of petals, where nb_petals > 0.

// function howMuchILoveYou(nbPetals) {
//   const array = [
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//     'not at all',
//   ];
//   let message;
//   for (let i = 0; i < array.length; i += 1) {
//     if (i === nbPetals - 1 || i === (nbPetals - 1) % array.length) {
//       message = array[i];
//     }
//   }
//   return message;
// }

// console.log(howMuchILoveYou(12));

// Task 6

// Get the number n(n > 0) to return the reversed sequence from n to 1.
// Example: n = 5 >> [5, 4, 3, 2, 1]

// const reverseSeq = n => {
//   const array = [];
//   let number = n + 1;
//   for (let i = 0; i < n; i += 1) {
//     number -= 1;
//     array[i] = number;
//   }
//   return array;
// };

// console.log(reverseSeq(7));

// Task 7

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates
// and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need.
// Note: if n < 0 or m < 0 return 0!

// function paperwork(n, m) {
//   let total;
//   return n < 0 || m < 0 ? (total = 0) : (total = n * m);
// }

// console.log(paperwork(-5, 5));

// Task 8

// Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x) {
//   const array = x.split(' ');
//   let newArray = [];
//   let newString;
//   for (const arr of array) {
//     if (arr !== '') {
//       newArray.push(arr);
//       newString = newArray.join('');
//     }
//   }
//   return newString;
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// Task 9

// Write a method sum(sum_array in python, sumarray in julia, SumArray in C#) that takes an array of numbers
// and returns the sum of the numbers.These may be integers or decimals for Ruby and any instance of Num for Haskell.
// The numbers can also be negative. If the array does not contain any numbers then you should return 0.

// function sum(numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// }

// console.log(sum([1, 5.2, 4, 0, -1]));
