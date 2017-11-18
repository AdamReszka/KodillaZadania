'use strict';

var sayHello = function sayHello() {
  return console.log('Hello world!');
};
sayHello();

//Zadanie 1
var firstWord = 'Hello';
var secondWord = 'World';
console.log(firstWord + ' ' + secondWord);

//Zadanie 2
var myMulti = function myMulti(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(x * y);
};
myMulti(5);

//Zadanie 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = 0;
  args.forEach(function (arg) {
    return sum += arg;
  });
  var result = sum / args.length;
  console.log('\u015Arednia to ' + result);
};
average(4, 5, 6);

//Zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

//Zadanie 5
var diffTypes = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = diffTypes[2],
    lastName = diffTypes[4];

console.log('Hello, my name is ' + firstName + ' ' + lastName);
