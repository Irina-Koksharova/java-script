// Задача 1 (из нашего потока)
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку,
// полученную из объединения(конкатенации) строк в формате ${ номер элемента } - ${ значение элемента } \n,
// где \n - спецсимвол переноса.
// Нумерация должна начинаться с 1. К примеру для первого элемента массива['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.
// Используйте вспомогательную переменную result для добавления(конкатенации) строк внутри цикла for

// const getItemsString = function (array) {
//   let result = '';
//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

// Задача 2 (из нашего потока)
// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию
// calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку(в строке будут только слова и пробелы)
// и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
// Для решения этой задачи не используйте циклы.Т.е.никаких for, while, do while, for of, for in, forEach
// или функциональных методов.

// const calculateEngravingPrice = (message = '', pricePerWord = 0) =>
//   message.split(' ').length * pricePerWord;
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// );

// Задача 3 (из нашего потока)
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string = '') {
//   const array = string.split(' ');
//   let longestWord = array[0];
//   for (let i = 0; i < array.length; i += 1) {
//     array[i].length >= longestWord.length
//       ? (longestWord = array[i])
//       : longestWord;
//   }
//   return longestWord;
// };
// console.log(findLongestWord('Google do a roll'));

// Задача 4 (из нашего потока)
// Напиши функцию formatString(string, maxLength = 40), которая принимает строку и форматирует ее если необходимо.
// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и добавляет
// в конец строки троеточие ..., после чего возвращает укороченную версию.

// function formatString(string, maxLength = 40) {
//   if (string.length <= maxLength) {
//     string;
//   } else {
//     string = string.slice(0, maxLength) + '...';
//   }
//   return string;
// }
// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );

// Задача 5 (из нашего потока)
// Функция предикат возвращает true или false
// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale. Если нашли запрещенное слово то функция возвращает true,
// если запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.

// function checkForSpam(str) {
//   let normalizedString = str.toLowerCase();
//   let firstBanWord = 'spam';
//   let secondBanWord = 'sale';

//   return (
//     normalizedString.includes(firstBanWord) ||
//     normalizedString.includes(secondBanWord)
//   );
// }
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// Задача 6 (из нашего потока)
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array и заполняет его
// числами из массива array умноженными на 10. Для перебора массива и добавления новых значений
// используй цикл for.По завершению перебора массива array возвращается массив numbers.

// function mapArray(array) {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }
// console.log(mapArray([-2.5, 0, 2.5]));

// Задача 7 (из нашего потока)
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
// Функция проверяет каждое значение массива - является ли значение конечным числом (Number.isFinite).
// Для проверки используй цикл for.Числа добавляются в новый массив numbers с помощью метода push,
// а не числа - игнорируются. По завершению проверки массива array возвращается массив numbers.

// function filterArray(array) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }
// console.log(filterArray([0, -0, 100, '100']));

// Задача 8 (из нашего потока)
// Напиши функцию reduceArray(array), которая принимает числовой массив array.
// Если массив array не пустой, необходимо посчитать сумму всех элементов массива,
// используя цикл for.Для подсчета суммы используй переменную total.
// Функция должна возвращать 0 если массив пустой и значение total в противном случае.

// function reduceArray(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }
//   return total;
// }
// console.log(reduceArray([1, 2, 2.5]));

// Задача 9 (из нашего потока)
// Есть массив logins с логинами пользователей.
// Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:
// проходить проверку на длину от 4 до 16 - ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins

// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и верни true или false
// в зависимости от того, попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый
// логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет
// и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:
// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку
// 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что - то одно.Это позволяет переиспользовать
// код и изменять логику работы функции только в одном месте, не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false.
// Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления
// использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// function isLoginValid(login, min = 4, max = 16) {
//   return login.length >= min && login.length <= max;
// }

// function isLoginUnique(allLogins, login) {
//   return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   if (!isLoginValid(login)) {
//     return (message = ERROR);
//   }
//   if (!isLoginUnique(allLogins, login)) {
//     return (message = REFUSAL);
//   }
//   allLogins.push(login);
//   console.log(allLogins);
//   return SUCCESS;
// }

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// console.log(addLogin(logins, 'Mango'));

// Задача 6
// Напиши скрипт со следующим функционалом:
// При загрузке страницы пользователю предлагается в prompt ввести число.
// Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
// необходимо посчитать сумму всех элементов массива и записать ее в переменную total.Используй цикл for или for...of.
// После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов,
// не обязательно.Если хочешь, в случае некорректного ввода, показывай alert с текстом
// 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно,
// после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let value;
// const numbers = [];
// let total = 0;

// for (let i = 1; i > numbers.length; i += 1) {
//   input = prompt(`Пожалуйста, введите число`);
//   numbers.push((value = +input));
//   if (input === null) {
//     break;
//   }
// }
// function arraySum(numbers) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
//   }
//   console.log(`Общая сумма чисел равна ${total}`);
// }
// arraySum(numbers);

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// Вернет новый массив в котором будут
// элементы с индексами от 1 до (clients.length - 1)
console.log(clients.length);
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
