let score = 33
let score2 = "33"

console.log(typeof score);
console.log(typeof (score2));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let x = "33abc"
let x_n = Number(x);
console.log(x_n);
console

let bool1 = true;
let bool1_n = Number(bool1)
console.log(bool1_n);

let null_val = null;
let null_n = Number(null_val)
console.log(null_n);

//Convert to integer(typecast)
//"33" => 33
// "33abc" => NaN but jab typeof operator usekarenge toh number show hoga
// true => 1; false => 0
// null => 0;

// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(boolenaIsLoggedIn);

let a = "vinay";
let a_n = Number(a);
console.log(a_n);

let b = "";
let b_n = Number(b);
console.log(b_n);

let somenumber = 13

let stringNumber = String(somenumber)
console.log(stringNumber);
console.log(typeof stringNumber);
 