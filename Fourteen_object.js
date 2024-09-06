// Creating an singleton Object

const user1 = new Object();

const user = {};

console.log(user1);
console.log(user);
console.log(typeof user1);
console.log(typeof user);

// Both are same but the one creeated usign object constructor is known as singleton.

user1.name = "vinay";
user1.id = "123vinay";
user1.isLoggedIn = false;

console.log(user1.name);
console.log(user1);


// We can do nesting of objects 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "vinay",
            lastname: "joshi"
        }
    },
    userID: "123mic"
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

// We can use "?." optional chaining to safely use it

console.log(regularUser.fullname.userfullname);

//DO object ko ek mein karna
const obj1 = {1:"a",2:"b"}

const obj2 = {3:"c",4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3);
// console.log(obj3.obj1['1']);

const obj3 = Object.assign({},obj1,obj2);
// obj1 and obj2 will be merged into empty object the it will be assigned to obj3
console.log(obj3); 

// spreading is way better than object.assign to merge objects

const obj4 = {...obj1,...obj2};
console.log(obj4)

// We can have an array of objects

const obj_arr = [{},{},{},{},{}];

console.log(obj_arr[1].name);
// Pehle index par jo object hai uska "name" key 

console.log(Object.key(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

// To check whether object has a particular property or not

console.log(obj1.hasOwnProperty('name')); // will give a boolean value



