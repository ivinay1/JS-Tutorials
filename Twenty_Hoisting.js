// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// const and let can not access the value before initialization because they are placed in a temporal dead zone. But in var case, it will give undefined. 

// But in function, we get values of function because function values are stored during the memory creation phase so we just get access to it.

// undefined is itself a datatype in JS

console.log(a); // output will be undefined because of hoisting

let a = 4;


hi(); // it will get executed kyunki function keyword ko use karke jo function create krte hai woh hoist alag alag tarah se hote hai

// function definition
//function declaration
function hi(){
    console.log('hello');
}

sayHi() // output will be undefined since it is hoisted as a variable

// function definition
//function expression
var sayHi = function(){    //Anonymous function
    console.log("Hello");
}

// IIFE :- ek anaonymous function create karna aur ussi samay use kar lena