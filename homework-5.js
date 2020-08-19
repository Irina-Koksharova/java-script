// Задача 1 (из нашего потока)

// Напиши функцию - конструктор Account, которая создает объект со свойствами login и email.
// В prototype функции - конструктора добавь метод getInfo(), который возвращает строку
// со значениями свойств login и email объекта.

// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function (login, email) {
//   return `login : ${this.login}, email: ${this.email}`;
// };

// console.log(typeof Account.prototype.getInfo); // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo()); // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo()); // 'login : Poly, email: poly@mail.com'

// Задача 2 (из нашего потока)

// Напиши класс User для создания пользователя со следующим свойствами:
// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который выводит строку: User ${ имя } is ${ возраст } years old
// and has ${ кол - во фоловеров } followers

// const User = function (name, age, followers) {
//   this.name = name;
//   this.age = age;
//   this.followers = followers;
// };

// User.prototype.getInfo = function (name, age, followers) {
//   return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
// };

// console.log(typeof User); // 'function'

// const mango = new User('Mango', 2, 20);
// console.log(mango.getInfo()); // 'User Mango is 2 years old and has 20 followers'
// console.log(typeof mango.getInfo); // 'function'

// const poly = new User('Poly', 3, 17);
// console.log(poly.getInfo()); // 'User Poly is 3 years old and has 17 followers'

// Задача 3 (из нашего потока)

// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.
// Добавь методы класса:
// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих

// const Storage = function (array) {
//   this.items = array;
// };

// Storage.prototype.getItems = function (array) {
//   return this.items;
// };

// Storage.prototype.addItem = function (item) {
//   return this.items.push(item);
// };

// Storage.prototype.removeItem = function (item) {
//   const newArray = [];
//   for (const el of this.items) {
//     if (el !== item) {
//       newArray.push(el);
//     }
//   }
//   return (this.items = newArray);
// };

// console.log(typeof Storage); // 'function'

// const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

// const storage = new Storage(goods);

// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ] */

// storage.addItem('Дроид');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// Задача 4 (из нашего потока)

// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.
// Добавь классу следующий функционал:
// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str(строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

// const StringBuilder = function (string) {
//   this.value = string;
// };

// StringBuilder.prototype.getterValue = function (string) {
//   return this.value;
// };

// StringBuilder.prototype.append = function (str) {
//   return (this.value += str);
// };

// StringBuilder.prototype.prepend = function (str) {
//   let newString = this.value;
//   str += newString;
//   this.value = str;
//   return this.value;
// };

// StringBuilder.prototype.pad = function (str) {
//   this.append(str);
//   this.prepend(str);
//   return this.value;
// };

// console.log(typeof StringBuilder); // 'function'

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// Задача 5 (из нашего потока)

// Напиши класс Car с указанными свойствами и методами.
// class Car {
/*
 * Добавь `статический` метод
 * `getSpecs(car)`, который принимает
 * объект-машину как параметр
 * и возвращает шаблонную строку
 * со свойствами и значениями объекта.
 * Свойства:
 *   maxSpeed,
 *   speed,
 *   isOn,
 *   distance,
 *   price
 * Пример строки, полученной этим методом:
 * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
 */

class Car {
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }
  constructor({ maxSpeed, price }) {
    (this.maxSpeed = maxSpeed),
      (this.speed = 0),
      (this.isOn = false),
      (this.distance = 0),
      (this.price = price);
  }
  get price() {
    return this._price;
  }
  set price(value) {
    return (this._price = value);
  }
  turnOn() {
    return (this.isOn = true);
  }
  turnOff() {
    this.speed = 0;
    return (this.isOn = false);
  }
  accelerate(value) {
    if (this.speed + value > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else {
      this.speed += value;
    }
    return this.speed;
  }
  decelerate(value) {
    if (this.speed - value < 0) {
      this.speed = 0;
    } else {
      this.speed -= value;
    }
    return this.speed;
  }
  drive(hours) {
    if ((this.isOn = true)) {
      this.distance += this.speed * hours;
    }
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
