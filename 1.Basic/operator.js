'use strict';
//#operator.js
let addition = 1+1;
let substraction = 1 - 1;
let multiplcation = 1 * 1;
let division = 5 / 2.5; 
let reminder = 5 % 2;


let prefix = 5;
let postfix = 5;
// exponential operatior 
let x = 5 ** 2;



console.log('Working!');
// postfix
console.log(postfix++);
console.log(postfix);
// prefix
console.log(++prefix);
console.log(prefix);
console.log(x);

// part 2 logical 

let test = {
    x: 'x'
}; 

let word = 'Hello !';
let arr = [];

// delete test.x;    // to delete x use delete operator

console.log(test.x);
console.log(typeof word);
console.log(typeof arr); // output will object because in javascript most of the things it takes as an object 

/*  <a href="javascript:void(0)">Some Link </a> */ // it will redirect page with some other page that is used in javascript void operator in regular javascript

console.log(true && true);  // will return true because both operator is true
console.log(true && false);
console.log(false && false );

console.log(true || true); // true -> any operand is true
console.log(false || true);
console.log(true || false);
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

// Operator Precedences

let precedence = 1 + 4 * 2 ; // 9
let precedence2 = (1 + 4) * 2 ; // 10 
let precedence3 = 2 + 10 - 2; // 10

// output
console.log(precedence);
console.log(precedence2);
console.log(precedence3);