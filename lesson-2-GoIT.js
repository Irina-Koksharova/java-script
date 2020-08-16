// Задача 1 (Саша решал на уроке)
//  Посчитать общую сумму покупок в корзине, к стоимости каждого товара добавить НДС 20%
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round((cart[i] *= 1.2));
//   total += cart[i];
// }
// console.log(`Общая сумма покупок ${total} с учетом НДС`);

// Задача 2 (Саша решал на уроке)
//  Напиши скрипт который подсчитывает сумму всех чётных и нечетных чисел в массиве.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) total += numbers[i];
// }
// console.log(`Сумма всех четных чисел в данном массиве ${total}`);

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2) total += numbers[i];
// }
// console.log(`Сумма всех нечетных чисел в данном массиве ${total}`);

// Задача 3 (Саша решал на уроке)

// Напиши скрипт поиска логина
// Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
// Сначала через for
// Потом через for...of
// Логика break
// Метод includes() с тернарным оператором

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'k1widab3st';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }
// console.log(message);

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Пользователь ${loginToFind} найден.`;
//   }
// }
// console.log(message);

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : (message = `Пользователь ${loginToFind} не найден.`);

// console.log(message);

// Задача 4 (Саша решал на уроке)

// Напиши скрипт поиска самого маленького числа в массиве,
// при условии что числа уникальные (не повторяются).

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }
// console.log(smallestNumber);

// for (const number of numbers) {
//   if (number < smallestNumber) smallestNumber = number;
// }
// console.log(smallestNumber);

// Задача 5 (Саша решал на уроке)
// Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
// Элементов может быть произвольное кол-во.
// Пусть элементы массива  в строке будут разделены запятой.
// Сначала через for
// Потом через join()

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// for (const friend of friends) {
//   string += friend + ', ';
// }
// console.log(string);

// string = friends.join(', ');
// console.log(friends);
// console.log(string);

// Задача 6 (Саша решал на уроке)
// Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
// Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//   //   if (letter === letter.toUpperCase()) {
//   //     invertedString += letter.toLowerCase();
//   //   } else {
//   //     invertedString += letter.toUpperCase();
//   //   }
//     // или такой вариант
// //   const isEqual = letter === letter.toLowerCase();
// //   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// const isEqual = invertedString;
// console.log(invertedString);

// Задача 7 (Саша решал на уроке)
// Делаем slug в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов
// Нормализируем строку
// Разбиваем по словам
// Сшиваем в строку с разделителями

// const title = 'Top 10 benefits of React framework';
// const titleNormalized = title.toLowerCase();
// const slug = titleNormalized.split(' ');
// console.log(slug.join('-'));

// Задача 8 (Саша решал на уроке)
// Напиши скрипт который считает сумму элементов двух массивов.

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;
// let numbers = array1.concat(array2);
// for (let i = 0; i < numbers.length; i += 1) {
//   total += numbers[i];
// }
// или такой вариант
// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// Задача 9 (Саша решал на уроке)
// Работем с коллекцией карточек в trello
// Метод splice()
// Удалить
// Добавить
// Обновить

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];
