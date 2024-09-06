// array
//JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
//1.) JavaScript arrays are resizable and can contain a mix of different data types
//2.) JavaScript arrays are not associative arrays so elements of arrays can be accessed using indexes
//3.)JavaScript arrays are zero-indexed
//4.) JavaScript array-copy operations create shallow copies not deep copies

const myArr = [0,2,4,3,2,1];
console.log(typeof myArr)
const myHeroes = ["shaktiman","nagraj","G-one"];

const myArr2 = new Array(1,2,4,5);
console.log(myArr2[0]);

// Array Methods

myArr.push(7); //Insert at end
myArr.pop(); //delete from end

myArr.unshift(9); //adds new elements to the beginning of an array.
myArr.shift() //removes the first item of an array,changes the original array and returns the shifted element.

const newArr = myArr.join();

console.log(myArr);
console.log(newArr); // binds tha values in array into string with comma separated

// splice vs slice
const tarr = new Array(12,3,2,1);
console.log("Original Array",tarr);
console.log("slice Array",tarr.slice(1,3));
console.log("after applying slice original array ",tarr);
console.log("applying splice ",tarr.splice(1,3));
console.log("after applying splice original array ",tarr);

//splice made changes in original array while slice not
//splice 
// tarr.splice(1,3,9);
// Replaces 3 elements from index 1 and adds 9 to end
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


// *********************************************************************************************************************************************

const marvel_heroes = ["spiderman","IronMan","Thor"];
const DC_heroes = ["Superman","Batman","Flash"];

marvel_heroes.push(DC_heroes);  //Push pushes into exisitng array
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(DC_heroes);  //concat returns new concated array
console.log(allHeroes);

//SPREAD OPERATOR is used to spread each array into existing one one array items and then merges them all , it is preferred over concat beacause we can concat one time 2 arrays only

const all_new_heroes = [...marvel_heroes,...DC_heroes];
console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6],[6,7,[4,5]]];

const simplified_array = another_array.flat(Infinity);
console.log(simplified_array);


// static method determines whether the passed value is an Array
console.log(Array.isArray(simplified_array));
console.log(Array.isArray('[]'));
console.log(Array.isArray("Vinay"));
console.log(Array.isArray('[]'));
//Array.prototype itself is an array:
Array.isArray(Array.prototype);
console.log(Array.from("vinay"));
console.log(Array.from([1, 2, 3], (x) => x + x));
console.log(Array.from({name: "hitesh"})) //interesting (we have to define array banana kise hai key or value if we will not specify it will return empty array)

let score1 = 1;
let score22 = 2;
let score23 = 3;

console.log(Array.of(score1,score22,score23));

// ***********************************************************************************************************************

// Comparing objects
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(obj1 === obj2); // false, because objects are compared by reference, not by value

const a = [1,2,3];
const b = [1,2,3];
console.log(a == b)

// Converting objects to JSON
const jsonString = JSON.stringify(person);
console.log(jsonString);

// Parsing JSON to objects
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);

// Objects are fundamental to JavaScript and provide a way to group related data and functionality.

