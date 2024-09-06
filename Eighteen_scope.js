// Scoping in JavaScript determines the visibility and lifetime of variables within different parts of your code. The two main types of scope are global and local.


// Global Scope: Variables defined outside any function or block, making them accessible from anywhere in the code.

var x = 10; // Global variable

function myFunction() {
    console.log(x); // Accessing global variable
}

myFunction(); // Output: 10

// Local Scope:  Variables declared inside a function or block (using var, let, or const).

function myFunction() {
    var y = 20; // Local variable
    console.log(y); // Accessing local variable
}

myFunction(); // Output: 20
console.log(y); // Error: y is not defined

// Block Scope: Variables declared with let or const inside a block (e.g., within {}).

if (true) {
    let z = 30; // Block-scoped variable
    console.log(z); // Accessing block-scoped variable
}

console.log(z); // Error: z is not defined


// NOTE: node ke andar gloabl scope aur window ke andar global scope alag alag hote hai !!!