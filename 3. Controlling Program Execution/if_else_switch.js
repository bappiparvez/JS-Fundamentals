//if_else_switch.js

(function(){
    'use strict';

    //if_else ****

    let color = 'red';
    if(color === 'blue'){
        console.log('blue');
    }else if(color === 'green'){
        console.log('green');
    }else{
        console.log(color);
    }
    if(1){
        console.log('truthy !');
    }
    let arr = ['yes'];
    if(arr.length){
        console.log(' Array has length');
    }

    (true) ? console.log(' truth value') : console.log('false value'); // ternary operator
    
    // *** Switch element

    let switcher = 'three';
    switch(switcher){
        case 'one':
                console.log('value is one');
                break;
        case 'two':
                console.log('two');
                break;
        default:
            console.log('match not found');

    }
})();