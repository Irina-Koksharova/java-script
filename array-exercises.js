// Задача 1
// Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.
// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// function arrayClone(arr) {
//   return arr.slice(0);
// }
// const arr1 = arrayClone(vegetables);
// console.log(arr1);

// Задача 2
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
// Элементы массива будут разделены запятой. Получите результат двумя разными методами.
// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// const stringTransform = function (arr) {
//   return arr.slice(' ').join(', ');
// };
// const string = stringTransform(vegetables);
// console.log(string);

// Задача 3
// Пользователь вводит многозначное число через promt.
// Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента и вставляет двоеточие(: )
// между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5: 563: 921: 7.
// const number = prompt('Введите число');

// const colonOdd = function (number) {
//   let string = number.slice('');
//   let result = [string[0]];
//   for (let i = 0; i < string.length; i += 1) {
//     if (string[i - 1] % 2 !== 0 && string[i] % 2 !== 0) {
//       result.push(':', string[i]);
//     } else {
//       result.push(string[i]);
//     }
//   }
//   return result.join('');
// };
// console.log(colonOdd(number));

// Задача 4
// Пользователь вводит строку кириллицей разного регистра.
// Напишите функцию, которая принимает строку в качестве аргумента и заменяет регистр каждого символа
// на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив[кАжДыЙ оХоТнИк].

// const str = prompt('Введите слово');
// const strTransform = function (str) {
//   const strArray = str.split('');
//   let strTransform = [];
//   for (let i = 0; i < strArray.length; i += 1) {
//     if (strArray[i] === strArray[i].toLowerCase()) {
//       strTransform.push(strArray[i].toUpperCase());
//     } else {
//       strTransform.push(strArray[i].toLowerCase());
//     }
//   }
//   return strTransform.join('');
// };
// console.log(strTransform(str));

// Задача 5
// Напишите функцию removeDuplicates(arr), которая возвращает массив,
// в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

// const arr = [
//   'php',
//   'php',
//   'css',
//   'css',
//   'script',
//   'script',
//   'html',
//   'html',
//   'java',
// ];
// const removeDuplicates = function (arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== arr[i - 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(removeDuplicates(arr));

// Задача 6
// Високосным годом является каждый четвертый год и века начинаются только на высокостные года,
// отличие високосного года от обычного заключается в появлении 366 - го дня.
// Напишите функцию chooseYears(start, end), которая принимает в качестве аргументов диапозон лет и
// возвращает массив високосных лет в заданном диапазоне.

// const chooseYears = function (start, end) {
//   let firstYear = start;
//   let lastYear = end;
//   let nextYear = firstYear;
//   let yearArray = [firstYear];
//   let result = [];
//   for (let i = 0; nextYear < lastYear; i += 1) {
//     nextYear += 1;
//     yearArray.push(nextYear);
//     if (
//       (yearArray[i] % 4 === 0 && yearArray[i] % 100 !== 0) ||
//       (yearArray[i] % 100 === 0 && yearArray[i] % 400 === 0)
//     ) {
//       result.push(yearArray[i]);
//     }
//   }
//   return result;
// };

// console.log(chooseYears(1900, 1932));

// Задача 8

// Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getFirst(array, n) {
//   if (array == null) return false;
//   if (n == null) return array[0];
//   return array.slice(0, n);
// }

// console.log(getFirst(array)); // 1
// console.log(getFirst(array, 4)); // 1,2,3,4
// console.log(getFirst(array, -3)); // 1,2,3,4,5,6

// Задача 9
// Напишите функцию getLast(array, n), которая возвращает фрагмент массива, содержащий последние 'n' элементов массива.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const getLast = function (array, n) {
//   let result;
//   if (n == null) {
//     result = array.length;
//   } else if (n > array.length) {
//     result = array;
//   } else {
//     result = array.slice(array.length - n);
//   }
//   return result;
// };

// console.log(getLast(array)); // 9
// console.log(getLast(array, 4)); // 6,7,8,9
// console.log(getLast(array, 12)); // 1,2,3,4,5,6,7,8,9

// Задача 10
// Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];
// let arr3 = [];

// if (arr1.length > arr2.length) {
//   arr2[arr2.length + 1] === 0;
// }
// console.log(arr1);
// console.log(arr2);

// for (let i = 0; i < arr1.length; i += 1) {
//     arr3.push(arr1[i] + arr2[i]);
// }
// console.log(arr3);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// const entries = Object.entries(hotel);
// console.log(entries);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }
