// Map:
// 1. A Map is an ordered collection of key-value pairs.
// 2. Keys can be of any type (including objects, functions, etc.).
// 3. Maintains the order of insertion of keys.
// 4. Provides built-in methods for iteration, such as map.keys(), map.values(), and map.entries().
// 5. Better performance for frequent additions and removals of key-value pairs.
// 6. The number of items in a Map is easily retrieved from its size property.
// Performs better in scenarios involving frequent additions and removals of key-value pairs.
// These properties are defined on Map.prototype and shared by all Map instances fore.g.
// map.prototype.size , map.prototype.clear , map.prototype.delete , map.prototype.enteries, map.prototype.get(),map.prototype.forEach() etc....
// A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.


const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";

console.log(wrongMap); // Map { bla: 'blaa', bla2: 'blaaa2' }


const map = new Map();
map.set('name', 'Alice');   // Set a key-value pair
map.set(123, 'ID Number');  // Key can be a number
console.log(map.get('name')); // Get value by key
console.log(map.has(123));    // Check if key exists
map.delete('name');           // Remove key-value pair
console.log(map.size);        // Get number of key-value pairs
map.clear();                  // Remove all key-value pairs

const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  
  const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);
  
  // Merge maps with an array. The last repeated key wins.
  const merged = new Map([...first, ...second, [1, "eins"]]);
  
  console.log(merged.get(1)); // eins
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three

// cloning of map
const original = new Map([[1, "one"]]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false (useful for shallow comparison)


// Object:
// 1. An Object is a collection of key-value pairs, where keys are strings (or symbols).
// 2. Keys are converted to strings if they are not already strings.
// 3. Does not guarantee the order of keys (although modern engines do iterate in insertion order).
// 4. Objects have a prototype, which means they can have inherited properties.
// 5. Good for structured data with known keys and values.
// Not optimized for frequent additions and removals of key-value pairs.
// No native support for serialization or parsing.

const obj = {};
obj.name = 'Alice';       // Set a key-value pair
obj['123'] = 'ID Number'; // Key as a string
console.log(obj.name);    // Get value by key
console.log('123' in obj); // Check if key exists
delete obj.name;          // Remove key-value pair
console.log(Object.keys(obj).length); // Get number of keys
Object.keys(obj).forEach(key => delete obj[key]); // Remove all key-value pairs

// Summary:
// - Use Map when you need a collection of key-value pairs with any data type for keys, 
//   and when the order of keys is important.
// - Use Object for simpler structures with string keys, especially when working with JSON data or 
//   when leveraging object literals for configuration.
// Determining the number of items in an Object is more roundabout and less efficient. A common way to do it is through the length of the array returned from Object.keys().
// Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default)
// Native support for serialization from Object to JSON, using JSON.stringify()

// *******************************************************HIGH ORDER LOOPS**********************************************************************

// FOR OF LOOPS

// The for...of loop iterates over iterable objects (arrays, strings, maps, sets, etc.).
// It provides a simpler and more readable syntax compared to traditional for loops or for...in loops.

// Syntax:
for (element of iterable) {
    // code block to be executed
  }
  
  // Example over an array:
  const numbers = [1, 2, 3, 4, 5];
  for (const num of numbers) {
    console.log(num);
  }
  
  // Example over a string:
  const str = 'Hello';
  for (const char of str) {
    console.log(char);
  }
  
  // Example: Array of objects
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  for (const user of users) {
    console.log(`${user.name} is ${user.age} years old`);
  }
  
  // Where it is used:
  // 1. Iterating over arrays, strings, maps, sets, and other iterable objects.
  // 2. When you need the value of the elements directly rather than the index.
  
  // Where it is not used:
  // 1. For iterating over objects where you need access to both keys and values (use for...in loop or Object.entries()).
  // 2. When you need the index of the elements (use traditional for loop or forEach method).
  

//******************************************FOR EACH(METHOD of MAP)**************************************/

// The forEach() method executes a provided function(It can be anonymous function or predefined function) once for each key-value pair in the Map object.

// Syntax:
map.forEach((value, key, map) => {
    // code block to be executed
  });
  
  // Example: Using forEach with a Map
  const map = new Map();
  map.set('name', 'Alice');
  map.set('age', 25);
  map.set('country', 'USA');
  
  map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  
  // Key points:
  // 1. The callback function takes three arguments: value, key, and the map itself (map).
  // 2. Iterates over each key-value pair in the order of insertion.
  // 3. Useful for performing operations on each key-value pair in the Map.
  
  // Use case:
  const users = new Map();
  users.set('user1', { name: 'Alice', age: 25 });
  users.set('user2', { name: 'Bob', age: 30 });
  users.set('user3', { name: 'Charlie', age: 35 });
  
  users.forEach((value, key) => {
    console.log(`${key}: ${value.name} is ${value.age} years old`);
  });
  
  // Where it is used:
  // 1. Iterating over all key-value pairs in a Map to perform some operation on each pair.
  
  // Where it is not used:
  // 1. When you need to return a new array or transform the Map (use map() or other higher-order functions).
  // 2. When you need to break or stop the iteration early (use a for...of loop instead).
  

//**************************************FOR IN LOOP*****************************************************/

// The for...in loop is used to iterate over the properties (keys) of an object.

// Syntax:
for (let key in object) {
    // code to run for each key
  }
  
  // Example: Iterating over an object
  const user = {
    name: 'Alice',
    age: 25,
    country: 'USA'
  };
  
  for (let key in user) {
    console.log(`${key}: ${user[key]}`); // Prints "name: Alice", "age: 25", "country: USA"
  }
  
  // Example: Iterating over an array (not the best use case)
  const numbers = [1, 2, 3, 4, 5];
  for (let index in numbers) {
    console.log(numbers[index]); // Prints the array elements, but not recommended
  }
  
  // Key points:
  // 1. Use it to loop through the properties of an object.
  // 2. It loops through all enumerable properties, including those inherited from the object's prototype.
  // 3. Not ideal for arrays since it loops through property names (keys) instead of values directly.
  
  // Use case: Checking properties in an object
  const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
  };
  
  for (let property in car) {
    console.log(`${property}: ${car[property]}`); // Prints each property and its value
  }
  
  // Where to use it:
  // 1. When you want to go through the properties (keys) of an object.
  
  // Where not to use it:
  // 1. For looping through arrays or other iterable objects (better to use for...of or array methods like forEach).
  // 2. When you want to avoid inherited properties (use hasOwnProperty to filter).

// NOTE:-
// Use for...of loop or forEach method to iterate over a Map.
// The for...in loop is not suitable for iterating over Map elements; it's meant for iterating over object properties 