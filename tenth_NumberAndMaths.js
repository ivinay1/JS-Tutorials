//One method to create a variable of number type
const num = 400;
console.log(num);

//Another way to create a variable using new keyword
const balance = new Number(199);
console.log(balance);

//Some Methods of Number:-
//Converting it to String
console.log(balance.toString());
//Now after converting it to String we can use String methods also
console.log(balance.toString().length);

//To fix decimal points/value we can use toFixed()
const otherNumber = 23.12121212;
console.log(otherNumber.toFixed(2));

// Agar precise value chahiye then use toPrecise()
console.log(otherNumber.toPrecision(3));


const num2 = 100000;
console.log(num2.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


//MATHS is a library in JS
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.2));
console.log(Math.min(4,3,4,5,7,8));
console.log(Math.max(4,3,4,5,7,8));
console.log(Math.random()*10); //always gives a random value between 0 to 1
//modifying Math.random values 
console.log((Math.random()*10)+1);

const min  = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min);




