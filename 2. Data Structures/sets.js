// sets.js
(function(){
    'use strict';
    let mySet = new Set();
    let anArray = [1,1,1,2,2,3];
    let mySet2 = new Set(anArray); // 
    console.log(mySet2);  // u will show only the unique value 1,2,3
    console.log(mySet2.size); // will show length 3

    mySet2.add(4); // will add 4 ->  1,2,3,4
    mySet2.delete(1);  // will delete 1 -> 2,3,4

    mySet2.delete(6); // will return false just not error
    console.log(mySet2);  // 2,3,4
    console.log(mySet2.has(2)); // true
    console.log(mySet2.has(7)); // false
    
})();