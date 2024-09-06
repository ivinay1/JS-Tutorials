//Datatypes are divided into two parts:- (classification hua hai on the basis of kis tarah pr data store hua aur access hota hai )
//1.) Primitive(call by value) :
// Are of 7 categories:
//1.1.) String:
//1.2.) Number:
//1.3.) Null:
//1.4.) Undefined:
//1.5.) Symbol: to make a value unique
//1.6.) BigInt: to store large scientific values

// const score = 100
// const scoreValue = 100.3
//const isLoggedIn = false
//let userEmail=undefined;

const id =Symbol('123');
const anotherId =Symbol('123');

console.log(id === anotherId);

const bigNmber = 234234234234234234234234234234234n;

console.log(bigNumber);



//2.) Reference Type(Non -primitive)
        // Array,Objects.functions

//JS is dynamically typed , we need not to mention datatype before declaration


const heroes = ["shaktiman","naagraj","doga"];

const details = {
    name:"vinay",
    rollno : 12
}

const myFunction = function(){
    console.log("hello world");
}

//******************************************************************************************** */

// Memory is of two type :-
// Stack (Primitive), Heap (Non-Primitive)
// Jab bhi ek memory(variable,array) stack ke andar define hota hai toh uska hamein ek copy milta hai jabki heap mein define krne pe hamein ek reference milta hai toh jo bhi changes karenge woh original ko affect karenge

let myName = "vinay" //Stack ke andar jayega

let anotherName = myName;

anotherName = "nope";

console.log(anotherName);
console.log(myName);


let userOne = {
    email: "vinay@gmail.com",
    upi: "user@sbi"
}

let userTwo = userOne;

userTwo.email = "prakash@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

