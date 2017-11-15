'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var sayHello = function sayHello() {
  return console.log('Hello world!');
};
sayHello();

//Zadanie 1
var firstWord = 'Hello';
var secondWord = 'World';
console.log(firstWord + ' ' + secondWord);

//Zadanie 2
var myMulti = function myMulti(x, y) {
  return console.log(x * y);
};
myMulti(5, 3);

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
var strTypes = diffTypes.filter(function (element) {
  return typeof element === 'string';
});

var _strTypes = _slicedToArray(strTypes, 2),
    firstName = _strTypes[0],
    lastName = _strTypes[1];

console.log('Hello, my name is ' + firstName + ' ' + lastName);
