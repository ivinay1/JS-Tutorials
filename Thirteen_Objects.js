// We have two ways to declare an object:-
// 1.)  Object ki tarah
//2.) Literal ki tarah

// Jab Object ki tarah declare krte hai toh (Object.create) singleton object banta hai ( jab constructor se object banate hai toh singleton hi object banta hai) which implies ki apni tarah ka ek hi object hai jabki jab hamm object ko literal ki tarah banate hai toh uske multiple instances bann jate hai

const arr = [1,2,3,4];
console.log(arr[0]); // yaha pe array ke case mein keys fix hoti hai 0,1,2,3....n but in objects we can create our own keys

const id = Symbol('id');

//object literals
const obj = {
    name: "Vinay",
    "fullname": "vinay joshi",
    age: 18,
    location: "Haridwar",
    email: "joshivinay822@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [id] : "21sf"
}

// Behind the scenes yeh toh keys hai yeh as string treat ki jaati hai

console.log(obj["name"]); // one way to access 
console.log(obj.email); // another way to access but it has limitation that keys must not be of any other type like you cannot define them as strings,boolean,symbol etc....
// so dot notation is used when key is string if other than that it will be undefined since that object does not a property with key.

console.log(obj["fullname"]);
console.log(obj[id]);
// defining symbol as a key type in an object

const sym = Symbol(121);

console.log(typeof sym);

const obj1 = {

    [sym] : "India",
    [sym] : "bharat"
}

console.log(obj1[sym]);

// Here, we are using the same symbol sym as the key for both properties. Since symbols are unique, even though the same symbol is used twice, it actually refers to the same unique key. Thus, the second assignment ([sym]: "bharat") overwrites the first assignment ([sym]: "India").
// so to access them separately use different symbol names

// const obj2 = {
//     [name] : "vu"
// }

// console.log(obj2[name]);

const sym1 = Symbol("name"); // symbol sym1 is created with description as "name"
console.log(typeof sym1);
// sym1 = 123;
console.log(sym1);

// NOTE:- In JavaScript, symbols themselves are not designed to store values directly. They are unique and immutable primitives, and their primary use is as keys for object properties. You cannot directly store values inside a symbol. However, you can associate a symbol with a value by storing it in an object or using a Map

console.log(obj);

// We can directly change values using keys of objects and can also freeze them so that no one can change them

obj["name"] = "Golu";

// Object.freeze(obj);

// In JS functions are treated as variables
obj.sayHello = function(){
    console.log("hello Vinay!!!");
}

console.log(typeof obj["sayHello"]); // OUTPUT will be function
console.log(obj["sayHello"]); // We will get reference here function will not get executed
console.log(obj.sayHello()); // Isse function execute hoga 

// Use "this" to reference same object

obj.sayHelloJS = function(){
    console.log(`Hello ${this.name} welcome to JS`);
}

console.log(obj.sayHelloJS());
// Yeh execute krne ke baad aapko "hello golu welcome to Js " toh dikhega aur uske sath next line pe undefined bhi dikhega kyunki function ka return type kuch nahi hai na toh console log ko kuch nahi milega toh undefined

obj.sayHelloJS(); // Isme undefined nahi aayega

