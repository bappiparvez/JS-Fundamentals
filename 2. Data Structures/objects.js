(function(){
    'use strict';

    let myObject = {
        property1 : 'hello',
        property2 : true
    };
    
    //let obj = new Object();
    // two way to call get array property with object 
    myObject.property1;
    myObject['property2'];
    console.log(myObject.property1);
    console.log(myObject['property2']);
    
    myObject.property3 = 'something added';
    myObject['property4'] = 'something else';


    function getThingsByColor(color){
        let things = {
            red : 'a red things',
            green : 'a green things',
            blue : 'a blue things'
        }
        return things[color] || 'Sorry, no color exists';
    }

    console.log( getThingsByColor('red')); // will return 'a red things'
    console.log( getThingsByColor('white'));  // Sorry, no color exists
})();