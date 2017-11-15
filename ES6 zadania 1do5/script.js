const sayHello = () => console.log('Hello world!');
sayHello();

//Zadanie 1
const firstWord = 'Hello';
const secondWord = 'World';
console.log(`${firstWord} ${secondWord}`);

//Zadanie 2
const myMulti = (x,y) => console.log(x*y);
myMulti(5,3);

//Zadanie 3
const average = (...args) => {
  let sum = 0;
  args.forEach(arg => sum+=arg);
  const result = sum/args.length;
  console.log(`Średnia to ${result}`);
}
average(4,5,6);

//Zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

//Zadanie 5
const diffTypes = [1, 4, 'Iwona', false, 'Nowak'];
const strTypes = diffTypes.filter(element => typeof element === 'string');
const [firstName, lastName] = strTypes;
console.log(`Hello, my name is ${firstName} ${lastName}`);
