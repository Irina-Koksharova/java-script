// Задача 1 (из нашего потока)

// CRUD для свойств объекта
// С - create(создать)
// R - read(читать)
// U - update(обновить)
// D - delete (удалить)

// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of в формате ключ: значение c переносом строки('\n')

// let message = '';

// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// user.mood = 'happy';
// user['full time'] = true;
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   message += `${key} : ${user[key]}\n`;
// }
// console.log(message);

// Задача 2 (из нашего потока)

// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает число - количество свойств в объекте.
// Циклы не должны использоваться

// const countProps = function (obj) {
//   const keys = Object.keys(obj).length;
//   return keys;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ a: 1, b: 1 })); // 2
// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// Задача 3 (из нашего потока)

// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
// и возвращает имя самого продуктивного (который выполнил больше всех задач). Сотрудники и кол - во
// выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   const keys = Object.keys(employees);
//   let maxNumber = 0;
//   let bestEmployer = '';
//   for (const key of keys) {
//     if (employees[key] > maxNumber) {
//       maxNumber = employees[key];
//       bestEmployer = key;
//     }
//   }
//   return bestEmployer;
// };

// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers)); // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports)); // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };

// console.log(findBestEmployee(sellers)); // 'lux'

// Задача 4 (из нашего потока)

// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary (employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее. Каждое поле объекта, передаваемого в функцию,
// имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   const values = Object.values(employees);
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };

// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers)); // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports)); // 500

// Задача 5 (из нашего потока)
// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.

// function getAllPropValues(array, prop) {
//   const propertyName = [];
//   for (const product of array) {
//     if (prop in product) {
//       propertyName.push(product[prop]);
//     }
//   }
//   return propertyName;
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); //  []

// Задача 6 (из нашего потока)

// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice (allProdcuts, productName), которая получает массив объектов и имя продукта
// (значение свойства name). Возвращает общую стоимость продукта (цена умноженная на количество).

function calculateTotalPrice(array, prop) {
  let costOfGoods = 0;

  for (const product of products) {
    const keys = Object.keys(product);
    let total = 0;

    if (product.name === prop) {
      total = product.price * product.quantity;
    }

    if (total > 0) {
      costOfGoods += total;
    }
  }

  return costOfGoods;
}

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар')); // 9080

console.log(calculateTotalPrice(products, 'Сканер')); // 10200

console.log(calculateTotalPrice(products, 'Захват')); // 2400

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
