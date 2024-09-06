// JSON (Javascript Object Notation)

// JSON is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used for transmitting data in web applications between a server and a client.

// Key Points:
// Syntax:
// JSON is a string representation of an object or array.
// It uses key-value pairs like objects in JavaScript.
// Keys must be strings enclosed in double quotes.
// Values can be strings, numbers, arrays, objects, true, false, or null.

// !  {
// !    "name": "John",
// !    "age": 30,
// !    "isStudent": false,
// !   "courses": ["Math", "Science"],
// !    "address": {
// !       "city": "New York",
// !        "zip": "10001"
// !    }
// !  }


// Handling JSON in JavaScript
// 1. Parsing JSON:
// Converts a JSON string into a JavaScript object.
// Use JSON.parse() method

const jsonString = '{"name": "John", "age": 30, "isStudent": false}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John
console.log(jsonObject.age);  // Output: 30

// Stringifying JSON:
// Converts a JavaScript object into a JSON string.
// Use JSON.stringify() method

const obj = {
    name: "John",
    age: 30,
    isStudent: false
};
const jsonString1 = JSON.stringify(obj);
console.log(jsonString1); // Output: '{"name":"John","age":30,"isStudent":false}'

// Common Uses:
// Data Transmission: Sending and receiving data between a client and a server.
// Configuration Files: Storing configuration settings.
// APIs: Most modern APIs use JSON to structure the data

// Example of sending a GET request and handling JSON response
fetch('https://api.example.com/data')
    .then(response => response.json()) // Parse the JSON from the response
    .then(data => {
        console.log(data); // Handle the data
    })
    .catch(error => {
        console.error('Error:', error); // Handle errors
    });

// Example of sending a POST request with JSON payload
const data = {
    name: "John",
    age: 30
};

fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // Convert the data to JSON string
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

