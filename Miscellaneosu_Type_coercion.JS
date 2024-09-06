// Type Coercion in JavaScript
// Type coercion is the process of converting a value from one data type to another (such as a string to a number) automatically or explicitly. In JavaScript, this often happens in the context of equality comparisons and can lead to unexpected results if not handled carefully.

// Loose Equality (==) vs. Strict Equality (===)
//  Loose Equality (==): This operator checks for equality after converting both values to a common type (type coercion).
// Strict Equality (===): This operator checks for equality without converting either value. Both the value and the type must be the same.


// Be careful with type coercion in comparisons
const num = '10'; // num is a string
if (num == 10) {
    // Loose equality (==) allows type coercion, so '10' (string) is converted to 10 (number)
    console.log("Loose equality allows type coercion (10 == '10').");
} else {
    console.log("This won't run.");
}

if (num === 10) {
    // Strict equality (===) does not allow type coercion, so '10' (string) is not equal to 10 (number)
    console.log("This won't run because '10' is not strictly equal to 10.");
} else {
    console.log("Strict equality prevents type coercion (10 !== '10').");
}

// Type coercion examples
console.log('5' - 2); // 3, '5' is converted to 5, then 5 - 2 = 3
console.log('5' + 2); // '52', 2 is converted to '2', then '5' + '2' = '52' (string concatenation)
console.log('5' * 2); // 10, '5' is converted to 5, then 5 * 2 = 10
console.log('5' / 2); // 2.5, '5' is converted to 5, then 5 / 2 = 2.5

// Boolean coercion
console.log(Boolean(0)); // false, 0 is falsy
console.log(Boolean('')); // false, empty string is falsy
console.log(Boolean('Hello')); // true, non-empty string is truthy
console.log(Boolean([])); // true, empty array is truthy

// Using strict equality to avoid type coercion
const value = '0';
if (value === 0) {
    console.log("This won't run because '0' is not strictly equal to 0.");
} else {
    console.log("Strict equality prevents type coercion ('0' !== 0).");
}

// Always use strict equality (===) to avoid bugs related to type coercion.
