// weak maps and sets.js

(function(){
    'use strict';
    let myWeakSet = new WeakSet();

    let someobj = {};
    myWeakSet.add(someobj);
    console.log(myWeakSet.has(someobj)); // will return true

    myWeakSet.delete(someobj);
    console.log(myWeakSet.has(someobj)); // will return false because it already deleted

    let myWeakMap = new WeakMap();
})();