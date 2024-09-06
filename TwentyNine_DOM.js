
// The DOM (Document Object Model) is a programming interface for web documents.
// It represents the structure of a web page as a tree of nodes (elements).

// What DOM Does:
// - Allows JavaScript to interact with and manipulate HTML and CSS.
// - Enables dynamic changes to content, structure, and styles on a web page.

// Key Concepts:
// 1. Nodes and Elements:
//    - Nodes: Every item in the DOM tree is a node (elements, text, attributes).
//    - Elements: HTML tags in the document (e.g., <div>, <p>).

// 2. DOM Tree Structure:
//    - The root of the tree is the document object.
//    - Each element in the document is a branch/node.

document; // The root of the DOM tree
document.documentElement; // The <html> element
document.body; // The <body> element

// Interacting with the DOM:
// JavaScript provides methods to select, modify, and create elements.

const element = document.getElementById('myId'); // Select an element by ID
element.textContent = 'Hello, World!'; // Change the text content of an element
const newElement = document.createElement('div'); // Create a new element
document.body.appendChild(newElement); // Add the new element to the body

// Event Handling:
// You can add event listeners to elements to make web pages interactive.

element.addEventListener('click', () => {
  alert('Element clicked!');
});


//********************************************************************************************************/


// The DOM (Document Object Model) represents a web page's structure as a tree of elements.
// JavaScript can change the content, structure, and style of the page using the DOM.

// Selecting Elements:
const elementById = document.getElementById('myId'); // Select by ID
const elementsByClassName = document.getElementsByClassName('myClass'); // Select by class
const elementsByTagName = document.getElementsByTagName('div'); // Select by tag name
const elementBySelector = document.querySelector('.myClass'); // Select the first match with CSS selector
const elementsBySelectorAll = document.querySelectorAll('.myClass'); // Select all matches with CSS selector

// Changing Content:
const element = document.getElementById('myId');
element.textContent = 'New text'; // Change text content
element.innerHTML = '<b>Bold text</b>'; // Change HTML content

// Changing Style:
element.style.color = 'red'; // Change text color
element.style.backgroundColor = 'blue'; // Change background color

// Adding and Removing Classes:
element.classList.add('newClass'); // Add a class
element.classList.remove('oldClass'); // Remove a class
element.classList.toggle('active'); // Toggle a class

// Creating and Adding New Elements:
const newElement = document.createElement('div'); // Create a new div
newElement.textContent = 'Hello, World!'; // Add text to the new div
document.body.appendChild(newElement); // Add the new div to the body

// Event Handling:
element.addEventListener('click', () => {
  alert('Element clicked!');
}); // Add a click event listener


//********************************************************************************************************/


// The DOM (Document Object Model) is a programming interface for web documents.
// It represents the structure of a web page as a tree of nodes (elements).

// What DOM Does:
// - Allows JavaScript to interact with and manipulate HTML and CSS.
// - Enables dynamic changes to content, structure, and styles on a web page.

// Key Concepts:
// 1. Nodes and Elements:
//    - Nodes: Every item in the DOM tree is a node (elements, text, attributes).
//    - Elements: HTML tags in the document (e.g., <div>, <p>).

// 2. DOM Tree Structure:
//    - The root of the tree is the document object.
//    - Each element in the document is a branch/node.

document; // The root of the DOM tree
document.documentElement; // The <html> element
document.body; // The <body> element

// Interacting with the DOM:
// JavaScript provides methods to select, modify, and create elements.

const element = document.getElementById('myId'); // Select an element by ID
element.textContent = 'Hello, World!'; // Change the text content of an element
const newElement = document.createElement('div'); // Create a new element
document.body.appendChild(newElement); // Add the new element to the body

// Event Handling:
// You can add event listeners to elements to make web pages interactive.

element.addEventListener('click', () => {
  alert('Element clicked!');
});

//********************************WINDOW AND DOCUMENT*****************************************************/

// The window object represents the browser window.
// It is the global object in a web browser, meaning all global variables and functions are properties of window.

// Examples:
console.log(window.innerWidth); // Width of the window
console.log(window.innerHeight); // Height of the window

window.alert('Hello!'); // Display an alert box
window.setTimeout(() => { console.log('Hi'); }, 1000); // Execute a function after a delay




// The document object represents the HTML document loaded in the browser.
// It is a property of the window object and provides methods to interact with the DOM.

// Examples:
console.log(document.title); // Get the title of the document
document.body.style.backgroundColor = 'lightblue'; // Change the background color of the body

const element = document.getElementById('myId'); // Select an element by ID
element.textContent = 'New Text'; // Change the text content of the selected element

// NOTE:-
// 1.) The structure of a HTMl document consist of a window, a document, and HTML having two child elements- head and body
// 2.) DOM manipulation allows you to change the values and structure of a webpage using javascript
// 3.) DOM manipulation in js allows you to access and manipulate web page elements


