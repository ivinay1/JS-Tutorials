// "this" keyword is used to refer current context
// "this" is global object

const user = {
    name: "vinay",
    lastname: "joshi",
    id: "123vj",

    sayHello: function(){
        console.log(`Hello Mr. ${this.name}`);
    }
}

user.sayHello();
user.name = "Amitabh";
user.sayHello();

console.log(this) // It will be undefined in windows beacause in node there is no global object toh this kisse point kare but in console "window" is the global object so in console it will refer "window" object

const sweetDish = function() {
    let name  = "RasMalai";
    console.log(this); // undefined nahi ayega this ke andar ka content show hoga
    console.log(this.name); // undefined
}

sweetDish();

const snacks = () =>{
    let name = "samose";
    console.log("Pakode");
    console.log(this.name); // undefined
}

snacks();


// Arrow function 

// Arrow functions provide a shorter syntax for writing functions in JavaScript.
// Syntax: (parameters) => { function body }

// Example: Basic Arrow Function
const add = (a, b) => {
    return a + b;
};

console.log(add(2,3));

  // Example: Implicit Return (for single expression functions)(brances ka use kiye bina )
const subtract = (a, b) => a - b;

//We can also use paranthesis in implicit declaration
//for e.g:-
const multpily = (a,b) => (a*b);
//NOTE:- Jab paranthesis use karoge toh "return" nahi likhna hai automatically understood hota hai but "curly brace" lagog toh likhna compulsory hai return

console.log(subtract(6,5));

  // Example: Arrow Function without parameters
const greet = () => console.log('Hello!');

  // Key Features:
  // 1. 'this' keyword: Arrow functions do not have their own 'this' context.
// this kaam ni karta for inside functions only works for objects
  //    'this' refers to the surrounding (lexical) context.
    const obj = {
    value: 10,
    logValue: function() {
        setTimeout(() => {
        console.log(this.value);  // 'this' refers to 'obj'
        }, 1000);
    }
    };
  obj.logValue();  // Outputs: 10

  // 2. Cannot be used as constructors: Arrow functions cannot be used with the 'new' keyword.
  //    They do not have a 'prototype' property.

  // 3. No 'arguments' object: Arrow functions do not have their own 'arguments' object.
    const showArgs = () => {
    console.log(arguments);  // 'arguments' is not defined
};
  showArgs();  // Error: arguments is not defined

//fore.g. object ko return karna hai toh paranthesis mein wrap karna padhta hai

const addTwo = (num1,num2) => ({username:"vinay"})

