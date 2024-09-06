// Immediately Invoked Function Expression (IIFE)

(function sweetDish(){
    let dish = "Gulab Jamun";
    console.log(`The Sweet Dish is ${dish}`);
})();

// We can also use arrow function inside as IIFE

(() => {
    let dish = "Rasmalai";
    console.log(`The Sweet Dish is ${dish}`);
}) ();

// We can also pass parameters in IIFE

((dish)=>{
    console.log(`The Sweet Dish is ${dish}`);
})("Jalebi");

// Sometimes we have to apply ";" after calling IIFE because JS engine does not know when to stop the function so it will keep on executing again and again...

// "()" these are used to call the function and are known as "Execution Call"



