// destructuring  - extract values from arrays and objects, then assign them to variables in a convenient way
// [] - to perform array destructuring
// {} - to perform object destructuring


// To swap two variables

let a = 1;
let b = 2;

[b,a] = [a,b];
console.log(a);
console.log(b);

// To swap 2 elements in an array

const colours = ["red","green","blue","white","yellow"];

[colours[0],colours[4]] = [colours[4],colours[0]];
console.log(colours);


// ASSIGN ARRAY ELEMENTS TO VARIABLES

const [firstcolor,secondcolor,thirdcolor] = colours;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);

//for rest paramters - we can put them in a array

const [ab,bc,cd,...abc] = colours;

console.log(ab);
console.log(bc);
console.log(cd);
console.log(abc);

// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstname: "oggy",
    lastname: "joshi",
    age: 34
}

const person2 = {
    firstname: "Jack",
    lastname: "joshi",
    age: 44,
    mood: "jolly"
}

const {firstname:fname1,lastname:lname1,age:age1,mood1="happy"} = person1;
console.log(fname1);
console.log(lname1);
console.log(mood1);

const {firstname:fname2,lastname:lname2,age:age2,mood:mood} = person2;
console.log(fname2);
console.log(lname2);
console.log(mood);

// DESTRUCTUR IN FUNCTION PARAMTERS

function displayPerson({firstname,lastname,age}){
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age: ${age}`);
}

displayPerson(person1);

// Jab frontend se data backend ya API pr ya backend se frontend pr jaata hai toh woh JSON ki format mein jaata hai previously woh XML ke format mein jaata tha aur XML file se data to extract krna kaafi complex tha

// {
//     name: "abc",
//     age: "12",
//     id: "1234abc"
// }
// yeh json like object hai

// Toh destructuring bohot helpful rehti hai JSON se data ko extract krne ke liye

// [
//     {},
//     {},
//     {}
// ]

// BACKEND se array of object ki format mein bhi aa sakta hai toh waha par array methods alongwith object methods aur destructuring ki help se hamm data nikal sakte hai !!!

// API deals with JSON formats

// To study JSON we can use tools like JSON Formatter and to get random API you can get them from random API