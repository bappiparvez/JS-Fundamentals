// #functions.js
(function(){
    'use strict';


function functionName(arg){
        console.log(arg); 
}
functionName('pass a argument !');
functionName('pass different argument !');

function logArgs(arg1,arg2){
    let z = arg1+ '  ' + arg2 + '  ' + 'arguments';
    console.log(z);
    return z;
}
logArgs('these','are');

let f = function f(){

};
f();
function log(){
    console.log(testVariable);  // will show undefined because varibale not defined
    var testVariable = 'test';

}
log();

})();