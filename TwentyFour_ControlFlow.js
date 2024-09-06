// If-Else Control Statement
// JavaScript provides conditional statements to perform different actions based on different conditions.
// The if-else statement is used to execute a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
// Syntax:
// if (condition) {
//   // block of code to be executed if the condition is true
// } else {
//   // block of code to be executed if the condition is false
// }

// Example:
let age1 = 18;

if (age1 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// The else if statement allows you to test multiple conditions:
// Syntax:
// if (condition1) {
//   // block of code to be executed if condition1 is true
// } else if (condition2) {
//   // block of code to be executed if condition2 is true
// } else {
//   // block of code to be executed if none of the conditions are true
// }

const score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Nested if-else statements
const isMember = true;
const cartTotal = 250;

if (isMember) {
    if (cartTotal >= 100) {
        console.log("You get a 10% discount.");
    } else {
        console.log("You get a 5% discount.");
    }
} else {
    console.log("No discount for non-members.");
}

// Ternary Operator: a shorthand way for writing if-else statements
// Syntax: condition ? expr1 : expr2

const isLoggedIn = true;
const welcomeMessage = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(welcomeMessage);

// Note: Always ensure your conditions cover all possible cases to avoid unexpected behavior.
const temperature = 30;

if (temperature > 30) {
    console.log("It's hot outside.");
} else if (temperature >= 15 && temperature <= 30) {
    console.log("The weather is moderate.");
} else {
    console.log("It's cold outside.");
}

// Be careful with type coercion in comparisons
const num = '10';
if (num == 10) {
    console.log("Loose equality allows type coercion (10 == '10').");
} else {
    console.log("This won't run.");
}

if (num === 10) {
    console.log("This won't run because '10' is not strictly equal to 10.");
} else {
    console.log("Strict equality prevents type coercion (10 !== '10').");
}

// Always use strict equality (===) to avoid bugs related to type coercion.

//**********************************************Comparison Operators*****************************************************/

// Comparison Operators
// Comparison operators are used in conditional statements to compare values and return a boolean (true or false).
// These operators are essential for decision-making in if-else statements.

// == (Equal To)
// Checks if the values are equal, after type coercion if necessary.
console.log(5 == '5'); // true, because '5' is converted to 5

// === (Strict Equal To)
// Checks if the values and types are equal, without type coercion.
console.log(5 === '5'); // false, because 5 (number) is not equal to '5' (string)

// != (Not Equal To)
// Checks if the values are not equal, after type coercion if necessary.
console.log(5 != '5'); // false, because '5' is converted to 5

// !== (Strict Not Equal To)
// Checks if the values and types are not equal, without type coercion.
console.log(5 !== '5'); // true, because 5 (number) is not equal to '5' (string)

// > (Greater Than)
// Checks if the left value is greater than the right value.
console.log(10 > 5); // true

// < (Less Than)
// Checks if the left value is less than the right value.
console.log(10 < 5); // false

// >= (Greater Than or Equal To)
// Checks if the left value is greater than or equal to the right value.
console.log(10 >= 10); // true

// <= (Less Than or Equal To)
// Checks if the left value is less than or equal to the right value.
console.log(10 <= 5); // false

// Examples with if-else statements
let age = 20;

if (age == 20) {
    // This block will execute because age is loosely equal to 20
    console.log("Age is 20 (== check).");
}

if (age === 20) {
    // This block will execute because age is strictly equal to 20
    console.log("Age is 20 (=== check).");
}

if (age != '21') {
    // This block will execute because age is not loosely equal to '21'
    console.log("Age is not 21 (!= check).");
}

if (age !== '20') {
    // This block will execute because age is not strictly equal to '20'
    console.log("Age is not '20' (string) (!== check).");
}

if (age > 18) {
    // This block will execute because age is greater than 18
    console.log("Age is greater than 18.");
}

if (age < 25) {
    // This block will execute because age is less than 25
    console.log("Age is less than 25.");
}

if (age >= 20) {
    // This block will execute because age is greater than or equal to 20
    console.log("Age is 20 or older.");
}

if (age <= 20) {
    // This block will execute because age is less than or equal to 20
    console.log("Age is 20 or younger.");
}

// Note: Always use strict equality (=== and !==) unless there is a specific reason to use loose equality (== and !=).
// Using strict equality helps to avoid unexpected results due to type coercion.

//*********************************SCOPE****************************************************************************** */

// Significance of Scope in if-else Statements
// Scope determines the accessibility of variables and functions in different parts of your code.
// In JavaScript, scope can be either global or local (block scope).

// Global Scope
// Variables declared outside any function or block have global scope and can be accessed anywhere in the code.

let globalVar = "I am a global variable";

if (true) {
    console.log(globalVar); // Accessible here
}

// Local Scope (Block Scope)
// Variables declared inside a block (e.g., inside an if-else statement) are limited to that block.
// Use `let` or `const` to declare block-scoped variables.

if (true) {
    let localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}
// Shadowing
// A local variable can have the same name as a global variable.
// The local variable shadows the global variable within its scope.

let shadowVar = "I am a global variable";

if (true) {
    let shadowVar = "I am a local variable";
    console.log(shadowVar); // "I am a local variable"
}

console.log(shadowVar); // "I am a global variable"

// Significance:
// 1. **Avoids Variable Collisions**: Using block scope (let/const) helps prevent accidental overwriting of variables.
// 2. **Improves Code Readability**: Scoped variables make it clear where variables are defined and used.
// 3. **Memory Management**: Variables limited to a block are removed from memory once the block is exited, optimizing resource usage.

// Example with if-else statements
let age2 = 18;

if (age2 >= 18) {
    let message = "You are an adult.";
    console.log(message); // Accessible here
} else {
    let message = "You are a minor.";
    console.log(message); // Accessible here
}

// *******************************AND OR*************************************************************************
// We can use "&&" and "OR" operator to check more than one conditions in the if_else statements

a = 3;
b = 4;

if(a>b && a==b)
{
    console.log("Hurray!!!");
}

if(a>b || a==b)
{
    console.log("Hey!!!");
}

// *********************************SWITCH***************************************************************************

switch (expression) {
    case value1:
        // block of code to be executed if expression === value1
        break;
    case value2:
        // block of code to be executed if expression === value2
        break;
    // additional cases as needed
    default:
        // block of code to be executed if no case matches
}

const fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log('This is a banana.');
        break;
    case 'apple':
        console.log('This is an apple.');
        break;
    case 'orange':
        console.log('This is an orange.');
        break;
    default:
        console.log('Unknown fruit.');
}

// Output: This is an apple.

// Example of fall - through
const day = 2;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
    case 3:
        console.log('Tuesday or Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    default:
        console.log('Other day');
}

// Output: Tuesday or Wednesday

// ***************************************TRUTHY AND FALSY**********************************************************

// In JS some values are preassumed as true and some are preassumed as false these values are known as "TRUTHY" and "FALSY" values

// Truthy values :- "0", "false", {}, [], function(){}
// Falsy values :- 0 ,-0,BigInt 0n, " ", null, udefined, NaN

if([])
{
    console.log("Hey hello!!!");
}

if("0")
{
    console.log("Hey Hello!")
}

if("false")
{
    console.log("hjjhvejhve");    
}


if(0n)
{
    console.log("egeyd");
}

if(null)
{
    console.log("yryryr");
}

if(undefined)
{
console.log("qqqqqqq");
}

// **********************************************NULLISH COALESCING OPERATOR****************************************

// Nullish coalescing operator is used when there is a uncertainity in a function that after executing it can return null or undefined so to avoid null and defined we use this operator

let val1;
val1 = null??5;
val2 = 5??10;
val3 = null??undefined??3??10;

console.log(val1);
console.log(val2);
console.log(val3);

