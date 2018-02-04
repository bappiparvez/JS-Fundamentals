'use strict';

let number = 1;
let oct = 0o77; // 63d
let hx = 0x0011; // 17d
let bin = 0b1100; // 12b

let str = 'Hello';

let quotes = '"Hello", said the man';
let escaped = '"oh no you didn\'t"- she said';
let joined = 'wait, ' + 'what ? ';
let multiline = `this
string 
has 
linebreaks`;
let newline = 'this\nhas\nnewline';

let mysymbol = Symbol('my sumbol');  /// new datatype

let sm1 = Symbol('x');
let sm2 = Symbol('x');


let array = [5,'something',true];
let array2 = new Array();   // object
/*
var obj = {
    num:5,
    str = 'some string'
};

obj.num; // '.' dot notation 
obj['str'];  // bracket notation
*/
/*
console.log('Working!');
console.log(number);
console.log(oct);
console.log(hx);
console.log(bin);
console.log(str);
console.log(quotes);
console.log(escaped);
console.log(joined);
console.log(multiline);
console.log(newline);
*/

console.log(sm1 === sm2);

