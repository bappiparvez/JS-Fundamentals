// loop.js

(function(){
    'use strict';

    // for loop with Array

    let arr = ['one','two','three'];
    for(let i = 0; i< arr.length; i ++){
        console.log(arr[i]);
    }
    
    // for - - in loop for object
    let obj = {
        key1: 'value 1',
        key2: 'value 2',
        key3: 'value 3'
    }
    for (let prop in obj){
        console.log('key is ', prop ,'value is :', obj[prop] );
        

    }
  
    /// for .. of loop  -> it works with value not key

    let arr2 = [1,2,3];

    for(let val of arr2){
        console.log('this vale is',val);  //this vale is 1 this vale is 2 ....
    }

    let mySet = new Set();
    mySet.add('x').add('y').add('z');

    for(let val of mySet){
        console.log(val);  // x,y,z
    }

    let myMap = new Map();
    myMap.set('key1','a').set('key2','b').set('key3','c');
    
    for(let val of myMap){
        if(val[1] === 'b'){ break; }   /// for break just print a 
        console.log(val[1]); // a b c
    }

    // Iterators
    let mySet2 = new Set(['a','b','c']);
    let setItems = mySet2.entries();
    console.log(setItems.next());
    console.log(setItems.next());
    console.log(setItems.next());
    console.log(setItems.next());


    // while loop

    /* 
    while(condition){
        if(condition){

        }else{
            . .. .. 
        }
        something .. . .
    }
    */

})();