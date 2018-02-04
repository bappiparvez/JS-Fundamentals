'use strict';
var foo = 42;
foo = 43;
 
const bar = 42; 
let bar = 43; // will get an error because already bar variable decleared and it's constant


// 3 types of variable declearation 
// #1      var   - Global or Function scope
// #2      let     }- Block Scope
// #3      const   }- Block Scope
// most of the time use let or const because of global Scope isses 
console.log('Working!');
