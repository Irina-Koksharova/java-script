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

// Новые задачи для 23 потока

function includes(array, value) {
    let newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
            newArray.push(array[i])
        }
    }
    if (newArray.length === 0) {
        return false;
    } else {
        return true;
    }
}

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер');
// includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран');
// includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива');

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
    if (password !== ADMIN_PASSWORD) {
    return 'Доступ запрещён, неверный пароль!';
    }
    return 'Добро пожаловать!';
}

// checkPassword('mangohackzor');
// checkPassword('jqueryismyjam')

const fn = arr => arr.map(el => {
  const item = document.createElement('div');
  item.textContent = el;

  return item;
 });

// console.log(fn(['html', 'css', 'js', 'react']));

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
 result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')
  // Пиши код выше этой строки
  return result;
}

// console.log(checkForSpam('Latest technology news'))
// console.log(checkForSpam('Amazing SalE, only tonight!'))
// console.log(checkForSpam('Trust me, this is not a spam message'))
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'))

// const sumEx = function() {
//     return [...arguments].reduce(((acc, el) => acc + el), 0)
// }

const sumAr = (...args) => {
    return args.reduce(((acc, el) => acc + el), 0)
}

// const sumEx = function(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i += 1) {
//         total += arr[i]
//     }
//     return total
// }

const filter = function(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > 3) {
           newArr.push(arr[i])
        } 
    }
   return newArr
}

const increment = function(arr) {
    let newArr = []
    
    for (let i = 0; i < arr.length; i += 1) {
        newArr.push(arr[i] * 2)       
    }
   return newArr
}

// console.log(increment([1, 2, 3, 4, 5, 6, 7]))

const fnstr = str => {
    const newStr = str.split(',').join('')
    const reverseStr = str.split(',').reverse().join('')
    return newStr === reverseStr
}

// console.log(fnstr('1,1,1,e,f,d,s,a,2'))
// console.log(fnstr('1,1,2,2,1,1'))

function Person(name){
    this.name = name
}

Person.prototype.greeting = function(){
    return `Hi, I'm ${this.name}`
}

const mark = new Person('Mark')

// console.log(mark.greeting())
// console.log(typeof mark)

// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// function func() {
//     let string = 'I am a variable';
//     function string() {
//         return "I am a function" 
//     }
//     return string()
// }

// let result = parent()
// console.log(result)
const calculateSum = (arr) => {
    return arr.reduce((sum, elem) => sum + elem, 0)
}

// console.log(calculateSum([1,2,3,4,2,3,3,3,4,1]))

// const obj = {
//     a: 1,
//     b: 2
// }

// console.log(JSON.stringify(obj))

// for (var i = 0; i < 2; i++) {
//    setTimeout(() => console.log(i), 0)  
// }

const original = {
    model: 'iPhoneX',
    madeIn: 'USA'
}
const copy = {...original}
copy.madeIn = 'China'

// console.log(original)
// console.log(copy)

// const arr = Array.from({ length: 10 }, (_, index) => index)
// const arr = [...new Array(10).keys()]
// console.log(arr)

// console.log(1 < 2 < 3)
// console.log(3 > 2 > 1)

const array1 = [1, 2]
// console.log(typeof array1)
const array2 = [1, 2]

// const compare = (arr1, arr2) => {
//     return (arr1 === arr2) === (JSON.stringify(arr1) === JSON.stringify(arr2))
// }
// console.log(compare(array1, array2))
const arr = JSON.stringify(array1)
// console.log(typeof arr)

function multiply(a) {
    return function(b) {
        return a*b
    }
}
// console.log(multiply(5)(6))

const obj = {
    a: 1,
    b: 2
}

// const action1 = function (a) {
//     console.log(a)
// }

// const func = Object.keys(obj).forEach(val => action1(obj[val]))

const array3 = [1, 2, 2, 3, 4, 5]

// console.log(array3.map(el => String(el)))
// console.log(JSON.stringify(array3))
// console.log(array3.toString())
// console.log(String(array3))
// console.log("" + array3)

const array4 = [...array3].reverse()
// const array4 = []
// array3.forEach(item => array4.unshift(item))
// console.log(array3)
// console.log(array4)

const array5 = ['one', 'two', 'three', 'four']
const getValue = () => {
    // console.log(undefined == null ? array5.push(true) : false
        return undefined == null ? array5.push(true) : false
    
}
// getValue()
// console.log(getValue())

// console.log(array3)

const result = array3
    .sort()
    .reverse()
    .filter(el => el)
    .map(el => JSON.stringify(el))
    .filter(el => el)
    .reverse()
    .sort()
// console.log(result)


// console.log(1, sayHi)
// console.log(2, name)

// function showName() {
//     const name = 'Ira'
//     function name() {
//       console.log(name)  
//     } b
// }

// function sum () {
//     const args = [...arguments]
//     return args.reduce(function(a, b) {
//         return a + b;                                                                                                                                })
// }

// console.log(sum(10, 15, 20));

const sum = (...args) => {
    const argum = [...args]
    return argum.reduce(function(a, b) {
        return a + b;   
}
)}

console.log(sum(10, 15, 20));

